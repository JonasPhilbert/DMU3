// Klasser kan defineres med den gamle constructor notation, eller den nye class notation.

// Klasse defineret med constructor funktion.
function XPerson(name, age) {
    this.name = name;
    this.age = age;
    XPerson.population++;
}

// Statisk variable.
XPerson.population = 0;

console.log(XPerson.population);
const xPerson = new XPerson("Lene", 34);
console.log(xPerson);
console.log(XPerson.population);

// Klasse defineret med class-notation.
class Student {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        Student.count++;
    }
}

// Statisk variable.
Student.count = 0;

console.log(Student.count);
const student = new Student("Lotte", 1);
console.log(student);
console.log(Student.count);

// Fra slides: Nedarvning ved constructor-notation vs. class-notation.

// Constructor-notation.
function Person(navn) {
    this.navn = navn;
}
Person.prototype.toString = function() {
    return this.navn;
};
function Student(navn, id) {
    Person.call(this, navn);
    this.id = id;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.toString = function() {
    returnPerson.prototype.toString.call(this) + ": " + this.id;
};
let person = new Person("Søren Brun");
let student = new Student("Trine", 112);
console.log(person.toString()); // => Søren Brun
console.log(student.toString()); // => Trine: 112

// Class-notation
class Person {
    constructor(navn) {
        this.navn = navn;
    }
    toString() {
        return this.navn;
    }
}
class Student extends Person {
    constructor(navn, id) {
        super(navn);
        this.id = id;
    }
    toString() {
        returnsuper.toString() + ": " + this.id;
    }
}
let person = new Person("Søren Brun");
let student = new Student("Trine", 112);
console.log(person.toString()); // => Søren Brun
console.log(student.toString()); // => Trine: 112
