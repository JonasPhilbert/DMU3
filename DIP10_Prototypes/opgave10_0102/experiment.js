function Person(name, age) { // Constructor function
    this.name = name;
    this.age = age;
}

Person.newBorn = function(name) { // Static method of constructor function (analegous to Java static class method)
    return new Person(name, 0);
}

Person.prototype.talk = function() {
    if (this.age < 3) {
        console.log("Gee gee babawueeeh");
    } else if (this.age < 10) {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    } else {
        console.log(`Name's ${this.name}, pleasure to meet you.`);
    }
}

let alex = new Person("Alexander", 23);
console.log(alex.name);
alex.talk();

console.log();
let childOfAlex = new Person("Alex", 6);
childOfAlex.talk();

console.log();
let babyOfAlex = Person.newBorn("Al");
console.log(babyOfAlex.age);
babyOfAlex.talk();