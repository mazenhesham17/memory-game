function generateLevels() {
    const arr = [];

    for (var i = 2; i <= 60; i++) {
        var num = 0, dif = 30;
        for (var j = 2; j < i; j++) {
            if (i % j === 0) {
                if (dif > Math.abs(j - i / j)) {
                    dif = Math.abs(j - i / j);
                    num = j;
                }
            }
        }
        if (num) {
            var n = num, m = i / num;

            if (n < 7 && m < 5)
                arr.push({ "n": n, "m": m });
            [n, m] = [m, n];
            if (n !== m && n < 7 && m < 5) {
                arr.push({ "n": n, "m": m });
            }
        }
    }
    return arr;
}

module.exports = {
    generateLevels
}