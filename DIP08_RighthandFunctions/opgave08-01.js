let people = [
    p0 = {
        name: "Jonas",
        phone: "4550523263",
        email: "jonas@priestyard.dk",
    },

    p1 = {
        name: "Oscar",
        phone: "1288888888",
        email: "TheOsca@hotmail.dk",
    },

    p2 = {
        name: "Alexander",
        phone: "45800132",
        email: "SkouNetworks@gmail.com",
    },
]

// Sorterede navne stræng:
let str = "";
people.sort((a, b) => (a.name).localeCompare(b.name));
people.forEach(e => str += e.name + ", ");
console.log(str + "\n");

// Array med danske tlfnr.:
let arr = [];
people.forEach(e => e.phone.substring(0, 2) == "45" ? arr.push({name: e.name, phone: e.phone}) : null);
console.log(arr);
console.log();

// Tilføjelse af ID'er:
arr.forEach((e, i) => e.id = i);
console.log(arr);
console.log();