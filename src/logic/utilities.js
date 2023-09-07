// get next character in the alphabet
function nextChar(a) {
    return String.fromCharCode(a.charCodeAt(0) + 1);
}

// random shuffle an array
function randomShuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// make 2d array with initial val
function make2dArray(n, m, val) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        var innerArr = [];
        for (var j = 0; j < m; j++) {
            innerArr.push(val);
        }
        arr.push(innerArr);
    }
    return arr;
}

module.exports = {
    nextChar, randomShuffle, make2dArray
}