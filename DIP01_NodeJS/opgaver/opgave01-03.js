let foo = [0, 1, 2, 4, 6, 8, 10, 14];

function binarySearch(list, target) {
    let left = 0;
    let right = list.length - 1;
    let middle = -1;

    while(left <= right) {
        middle = Math.trunc((left + right) / 2);
        let value = list[middle];

        if (value == target){
            return middle;
        }

        if (value > target) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return -1;
}

console.log(binarySearch(foo, 6)); // => 4
console.log(binarySearch(foo, 3)); // => -1