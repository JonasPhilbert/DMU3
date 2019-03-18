// // 8.2 (confirmed af Erik)
// function compareSort(compareFunc) {
//     return compareFunc;
// }
//
// let sortFunc = compareSort((a, b) => a-b);
//
// let arr = [0, 2, 6, 4, 8, 2, 1, 5, 9, 11];
// arr.sort(sortFunc);
// console.log(arr);

function compareLen(a, b) {
    return a.length - b.length;
}

function compareIgnoreCase(a, b) {
    return a.toLowerCase() > b.toLowerCase();
}

function compareSort(compare) {
    return function (array) {
        array.sort(compare);
    }
}

const lenSort = compareSort(compareLen);
const caseSort = compareSort(compareIgnoreCase);
let a = ["lovely", "abe", "works"];
lenSort(a);
caseSort(a);

console.log(a);