let foo = [0, 3, 4, 7, 9, 10];
let bar = [1, 2, 5, 8, 11, 12];

function merge(listA, listB) {
    let result = [];
    let iA = 0, iB = 0;

    while (iA < listA.length && iB < listB.length) {
        if (listA[iA] < listB[iB]) {
            result.push(listA[iA]);
            iA ++;
        } else {
            result.push(listB[iB]);
            iB++;
        }
    }

    while (iA < listA.length) {
        result.push(listA[iA]);
        iA++;
    }

    while (iB < listB.length) {
        result.push(listB[iB]);
        iB++;
    }

    return result;
}

console.log(merge(foo, bar));