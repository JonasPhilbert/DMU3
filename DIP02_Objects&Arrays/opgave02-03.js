let list = [1, 10, 3];

list["max"] = function() {
    let max = -Infinity;
    for (let n of this) {
        if (n > max) max = n;
    }

    return max;
}
console.log(list["max"]());

list["sum"] = function() {
    let sum = 0;
    for (let n of this) {
        sum += n;
    }

    return sum;
}
console.log(list["sum"]());

list["contains"] = function(e) {
    for (let n of this) {
        if (n == e) return true;
    }

    return false;
}
console.log(list["contains"](10));
console.log(list["contains"](5));