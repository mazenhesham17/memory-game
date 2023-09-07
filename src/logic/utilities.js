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

// generate unique key for array of char or single char
function generateCustomKey(val) {
    let key = Math.floor(Math.random() * 1e9).toString();
    if (Array.isArray(val)) {
        key += val.join('');
    } else {
        key += val;
    }
    return key;
}

module.exports = {
    nextChar, randomShuffle, make2dArray, generateCustomKey
}