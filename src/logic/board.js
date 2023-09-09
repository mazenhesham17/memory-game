import { make2dArray, nextChar, randomShuffle } from "./utilities";

function makeCards(n) {
    var arr = [], cnt = 0, ch = 'A';
    for (var i = 0; i < n - (n & 1); i++) {
        if (cnt === 2) {
            ch = nextChar(ch);
            cnt = 0;
        }
        arr.push(ch);
        cnt++;
    }
    if (n & 1) {
        arr.push('+1');
    }
    return arr;
}

export function generateBoard(n, m) {
    var arr = make2dArray(n, m, "");
    var rnd = makeCards(n * m);
    randomShuffle(rnd);
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            arr[i][j] = rnd[i * m + j];
        }
    }
    return arr;
}

