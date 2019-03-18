let list = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

for (let i = list.length - 1; i >= 0; i--) {
    function swap(i) {
        let temp = list[i];
        list[i] = list[i+1];
        list[i+1] = temp;
    }

    for (let j = 0; j <= i - 1; j++) {
        if (list[j] > list[j + 1]) {
            swap(j);
        }
    }
}

console.log(list);

// X than sammenligninger kan frit byttes ud mellem number-typer og string-typer.