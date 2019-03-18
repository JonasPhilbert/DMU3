function balanced(str) {
    let parantheses = [];

    let openTypes =     ["(", "[", "{", "<"];
    let closedTypes =   [")", "]", "}", ">"];

    for (let n of str) {
        if (openTypes.indexOf(n) > -1) { // In case of open type, push to stack.
            parantheses.push(n)
        } else if (closedTypes.indexOf(n) > -1) { // In case of close type, pop off stack, and confirm correct parenthesis type.
            if (openTypes.indexOf(parantheses.pop()) !== closedTypes.indexOf(n)) return false;
        }
    }

    return parantheses.length === 0;
}

let foo = "(5 + 5) / {SUM(t)} % [{SUM(t)}]";
console.log(balanced(foo));

let bar = "(5 + 5) / {SUM(t)] % [{SUM(t)}]";
console.log(balanced(bar));