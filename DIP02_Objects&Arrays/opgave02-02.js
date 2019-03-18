function max(list) {
    let max = -Infinity;
    for (let n of list) {
        if (n > max) max = n;
    }

    return max;
}
console.log(max([-3, 2, 0, 12, 3]));

function contains(list, e) {
    for (let n of list) {
        if (n == e) {
            return true;
        }
    }

    return false;
}
console.log(contains([1, 2, 3, 4], 2));
console.log(contains([1, 2, 3, 4], 5));

function sum(list) {
    let sum = 0;
    for (let n of list) {
        sum += n;
    }

    return sum;
}
console.log(sum([1, 2, 3]));