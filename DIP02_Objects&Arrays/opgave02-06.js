// 2.6

let foo = ["en", "TO", "tre", "FIRE", "fem", "SEKS", "syv", "OTTE", "ni", "TI"];

function compare(a, b) {
    return a > b;
}

function compareLen(a, b) {
    return a.length > b.length;
}

function compareIgnoreCase(a, b) {
    return a.toLowerCase() > b.toLowerCase();
}

function bubbleSort(list, comparator) {
    function swap(i) {
        let temp = list[i];
        list[i] = list[i + 1];
        list[i + 1] = temp;
    }

    for (let i = list.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (comparator(list[j], list[j + 1])) {
                swap(j);
            }
        }
    }
}

console.log(foo);
bubbleSort(foo, compare);
console.log(foo);
bubbleSort(foo, compareLen);
console.log(foo);
bubbleSort(foo, compareIgnoreCase);
console.log(foo);