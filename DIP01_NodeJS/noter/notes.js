// Seperation function.
function sep() {
    console.log("\n-----------------------------------\n");
}

let list = ["one", "two", "three"];

for (let foo in list) {
    console.log(foo + " => " + list[foo]);
}

sep();

let i = 0;
for (let foo of list){
    console.log(i + " => " + foo);
    i++;
}

sep();

let bar = "str";
console.log(bar--);

sep();

let x = true && "1st" || "2nd";
let y = false && "1st" || "2nd";
console.log(x);
console.log(y);

sep();

let person = {
    name: "Jonas",
    age: 22
}

console.log(person);