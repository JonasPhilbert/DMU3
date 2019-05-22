const json = `[
    {
        "name": "Jason",
        "throws": [2, 2, 5]
    },
    {
        "name": "Erik",
        "throws": [6, 1, 3]
    },
    {
        "name": "Erik",
        "throws": [2, 3, 5]
    },
    {
        "name": "Alexander",
        "throws": [4, 4, 2]
    }
]`;

const throws = JSON.parse(json);

function kast(array, navn) {
    const throws = [];
    for (let e of array) {
        if (navn === e.name) {
            throws.push(e.throws);
        }
    }

    return throws;
}

function kast2(array, navn) {
    return array.filter(e => e.name === navn).map(e => e.throws);
}

function størst(array) {
    const highest = [];
    for (let e of array) {
        let max = 0;
        for (let t of e.throws) {
            if (t > max) max = t;
        }
        highest.push(max);
    }

    return highest;
}

function størst2(array) {
    return array.map(e => Math.max(...e.throws));
}

console.log(kast(throws, "Erik"));
console.log(kast2(throws, "Erik"));
console.log(kast(throws, "Alexander"));
console.log(kast2(throws, "Alexander"));
console.log(størst(throws));
console.log(størst2(throws));

// function throwDie() {
//     return Math.round(Math.random() * 6) + 1;
// }
