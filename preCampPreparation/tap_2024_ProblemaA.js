/**
 * Determina el resultado (X, O o E) del juego de ta-te-ti modificado con restricciones.
 *
 * @param {number} N                - Cantidad de restricciones (0 ≤ N ≤ 10^5).
 * @param {Array<Array<number>>} restricciones - Array de N pares [A, B], donde
 *                                               A y B están en [1..9], que indican
 *                                               que la casilla B no se puede usar
 *                                               si la casilla A está aún vacía.
 * @returns {'X'|'O'|'E'}          - 'X' si gana Xavier, 'O' si gana Olivia, 'E' en empate.
 */
function tictactoeConRestricciones(N, restricciones) {
    // ————————————————————————————————————————————————————————————————————
    // 1) Representación interna de las casillas, máscaras de bits y preprocesamiento
    // ————————————————————————————————————————————————————————————————————

    // Convertimos cada casilla 1..9 a un “índice” 0..8 (para usar como bit en un entero de 9 bits)
    // Por ejemplo, la casilla “1” corresponde al bit 0, la casilla “5” al bit 4, la “9” al bit 8, etc.

    // prereqs[i] = array de índices (0..8) que deben estar OCUPADOS antes de que la casilla i sea válida.
    // Si existe una restricción (A, B), entonces para poder jugar en B (índice B-1) hace falta que A (índice A-1) ya esté ocupado.
    const prereqs = Array.from({ length: 9 }, () => []);
    for (let i = 0; i < N; i++) {
        const [A, B] = restricciones[i];
        // Guardamos “A-1” como prerequisito para “B-1”
        prereqs[B - 1].push(A - 1);
    }

    // Máscaras de las 8 posibles líneas ganadoras de ta-te-ti en un tablero de 3×3
    // Cada máscara es un entero de 9 bits en el que los bits “1” indican la casilla:
    //    - fila 0 (bits 0,1,2):     0b000_000_111 = 0x07 = 7
    //    - fila 1 (bits 3,4,5):     0b000_111_000 = 0x38 = 56
    //    - fila 2 (bits 6,7,8):     0b111_000_000 = 0x1C0 = 448
    //    - col 0 (bits 0,3,6):     0b100_100_001 = 0x49 = 73   (pero representamos en bit order 0..8)
    //    - col 1 (bits 1,4,7):     0b010_010_010 = 0x92 = 146
    //    - col 2 (bits 2,5,8):     0b001_001_100 = 0x124 = 292
    //    - diag principal (0,4,8): 0b100_010_001 = 0x111 = 273
    //    - diag inversa  (2,4,6):  0b001_010_100 = 0x54 = 84
    const winMasks = [
        0b000000111, // 0,1,2  → casillas 1,2,3
        0b000111000, // 3,4,5  → casillas 4,5,6
        0b111000000, // 6,7,8  → casillas 7,8,9
        0b001001001, // 0,3,6  → casillas 1,4,7
        0b010010010, // 1,4,7  → casillas 2,5,8
        0b100100100, // 2,5,8  → casillas 3,6,9
        0b100010001, // 0,4,8  → casillas 1,5,9
        0b001010100, // 2,4,6  → casillas 3,5,7
    ];

    /**
     * Comprueba si un jugador con máscara `mask` ya ha formado alguna línea ganadora.
     * @param {number} mask - Entero de 9 bits con las posiciones ocupadas por el jugador.
     * @returns {boolean}   - true si `mask` contiene al menos uno de los winMasks.
     */
    function haGanado(mask) {
        for (const wm of winMasks) {
            // Si al hacer mask & wm obtenemos exactamente wm, esa línea está completa
            if ((mask & wm) === wm) {
                return true;
            }
        }
        return false;
    }

    // Memoización: guardaremos para cada estado (xMask, oMask) su resultado: 'X', 'O' o 'E'.
    // Clave: combinamos ambos en un solo entero: xMask << 9 | oMask (cada uno cabe en 9 bits).
    const memo = new Map();

    // ————————————————————————————————————————————————————————————————————
    // 2) Función recursiva con minimax + memoización
    // ————————————————————————————————————————————————————————————————————

    /**
     * dfs(xMask, oMask) → devuelve 'X', 'O' o 'E' según el resultado óptimo desde este estado.
     * - xMask y oMask indican qué celdas ocupa X y qué celdas ocupa O, respectivamente.
     * - En cada llamada determinamos de quién es el turno a partir del conteo de bits:
     *   si ambos tienen igual # de fichas, es turno de X; si no, es turno de O.
     * - Se evalúan:
     *    a) Si X ya había ganado (haGanado(xMask)) → devolvemos 'X'.
     *    b) Si O ya había ganado (haGanado(oMask)) → devolvemos 'O'.
     *    c) Si no hay movimientos válidos (empate circunstancial) → devolvemos 'E'.
     *    d) Si hay movimientos, generamos cada posición posible:
     *         - tratamos de “colocar” la ficha del jugador actual en cada celda legal,
     *           y llamamos recursivamente a dfs(...) con las máscaras actualizadas.
     *         - Si encontramos alguna jugada que garantice la victoria del jugador en turno,
     *           devolvemos directamente el símbolo de ese jugador.
     *         - Si ninguna es ganadora pero alguna conduce a empate, devolvemos 'E'.
     *         - En caso contrario (todas las jugadas llevan a que el rival acabe ganando),
     *           devolvemos el símbolo del rival.
     */
    function dfs(xMask, oMask) {
        // 1) Verificar si ya está memoizado
        const key = (xMask << 9) | oMask;
        if (memo.has(key)) {
            return memo.get(key);
        }

        // 2) ¿Alguien ha ganado ya antes de mover?
        if (haGanado(xMask)) {
            memo.set(key, "X");
            return "X";
        }
        if (haGanado(oMask)) {
            memo.set(key, "O");
            return "O";
        }

        // 3) Determinar de quién es el turno:
        //    si tienen igual cantidad de bits puestos, X mueve; si no, O mueve.
        const xCount = countBits(xMask);
        const oCount = countBits(oMask);
        const turnoEsX = xCount === oCount;

        // 4) Generar lista de todos los movimientos “legales” (celdas vacías y cuyos prereqs estén llenos)
        const ocupadas = xMask | oMask; // máscaras de todas las casillas ocupadas
        const posibles = [];
        for (let i = 0; i < 9; i++) {
            const bitI = 1 << i;
            if ((ocupadas & bitI) !== 0) {
                // si ya está ocupada, no sirve
                continue;
            }
            // comprobar todas las restricciones: para cada prereq p en prereqs[i], p debe estar ocupado
            let habilitada = true;
            for (const p of prereqs[i]) {
                const bitP = 1 << p;
                if ((ocupadas & bitP) === 0) {
                    // aún no se ocupó p, por lo tanto no podemos jugar en i
                    habilitada = false;
                    break;
                }
            }
            if (habilitada) {
                posibles.push(i);
            }
        }

        // 5) Si no hay movimientos posibles, es empate
        if (posibles.length === 0) {
            memo.set(key, "E");
            return "E";
        }

        // 6) Minimax: intentamos cada posible jugada del jugador actual
        //    - Si `turnoEsX`, Xavier colocará un bit en xMask.
        //    - Si no, Olivia colocará un bit en oMask.
        // Resultado preferido de cada jugador: ganar > empatar > perder.

        // Variables para llevar el “mejor” resultado que podemos forzar:
        //   para X: si encuentra al menos un movimiento que lleve a 'X', lo devuelve de inmediato.
        //   si no, pero hay un movimiento que lleve a 'E', al final devuelve 'E'.
        //   en último caso devuelve 'O'.
        // Simétrico para O.
        let mejorSiEmpata = false; // pista si encontramos jugada que conduce a empate
        if (turnoEsX) {
            // Turno de X (Xavier)
            for (const celda of posibles) {
                const nuevaX = xMask | (1 << celda);
                const res = dfs(nuevaX, oMask);
                if (res === "X") {
                    // Encontramos jugada ganadora para X → devolvemos X
                    memo.set(key, "X");
                    return "X";
                }
                if (res === "E") {
                    mejorSiEmpata = true;
                }
                // si res === 'O', es jugada que le ganan, pero seguiremos buscando
            }
            if (mejorSiEmpata) {
                memo.set(key, "E");
                return "E";
            } else {
                memo.set(key, "O");
                return "O";
            }
        } else {
            // Turno de O (Olivia)
            for (const celda of posibles) {
                const nuevaO = oMask | (1 << celda);
                const res = dfs(xMask, nuevaO);
                if (res === "O") {
                    // Olivia encontró jugada ganadora → devolvemos 'O'
                    memo.set(key, "O");
                    return "O";
                }
                if (res === "E") {
                    mejorSiEmpata = true;
                }
            }
            if (mejorSiEmpata) {
                memo.set(key, "E");
                return "E";
            } else {
                memo.set(key, "X");
                return "X";
            }
        }
    }

    /**
     * Retorna la cantidad de bits “1” que tiene un entero (popcount).
     * @param {number} x - Entero en el rango [0..511] (9 bits).
     * @returns {number} - Número de bits activos.
     */
    function countBits(x) {
        // Método eficiente usando Brian Kernighan
        let cnt = 0;
        while (x !== 0) {
            x &= x - 1;
            cnt++;
        }
        return cnt;
    }

    // ————————————————————————————————————————————————————————————————————
    // 3) Llamamos a la recursión desde la posición inicial (tablero vacío)
    // ————————————————————————————————————————————————————————————————————
    console.log(dfs(0, 0));
    return dfs(0, 0);
}

tictactoeConRestricciones(7, [
    [2, 2],
    [1, 7],
    [3, 8],
    [5, 9],
    [4, 6],
    [6, 4],
    [4, 6],
]);
