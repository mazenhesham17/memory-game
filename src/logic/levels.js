function generateLevels() {
    const arr = [];

    for (var i = 2; i <= 30; i++) {
        var num = 0, dif = 30;
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                if (dif > Math.abs(j - i / j)) {
                    dif = Math.abs(j - i / j);
                    num = j;
                }
            }
        }
        if (num) {
            arr.push({ "n": num, "m": i / num });
            if (num != i / num) {
                arr.push({ "n": i / num, "m": num });
            }
        }
    }
    return arr;
}

module.exports = {
    generateLevels
}