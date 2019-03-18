// 10.1
class Person {
    constructor(cpr, name, age) {
        this.cpr = cpr || "0000000000";
        this.name = name || "John Doe";
        this.age = age || 0;
    }

    toString() {
        return `[${this.cpr}] ${this.name} (${this.age})`;
    }

    valueOf() {
        return this.cpr;
    }

    equals(p) {
        return p.constructor == Person && this.cpr === p.cpr;
    }

    compare(p) {
        return this.name.localeCompare(p.name);
    }
}

let alex = new Person("0123456789", "Alexander Skou", 23);
console.log(alex.toString());

let oscar = new Person("3456789012", "Oscar Valentin", 22);
console.log(oscar.toString());

    console.log();

console.log("Value of Oscar:\t\t\t\t" + oscar.valueOf());
console.log("Equals (Alex & Oscar):\t\t" + alex.equals(oscar));
console.log("Equals (Alex & Alex):\t\t" + alex.equals(alex));
console.log("Comparison (Alex & Oscar):\t" + alex.compare(oscar) + "\n");

// 10.2
let people = [oscar, new Person("7890123456", "Morten From", 25), alex];
console.log(people);
    console.log();
people.sort((a, b) => a.compare(b));
console.log(people);
    console.log();