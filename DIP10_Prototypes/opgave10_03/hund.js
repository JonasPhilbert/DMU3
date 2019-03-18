class Hund {
    constructor(navn) {
        this.navn = navn;
        if (Hund._antal) Hund._antal++; else Hund._antal = 1;
    }
    toString() { return this.constructor.name + ': ' + this.navn; };
    static antal() { return Hund._antal; }
}

let hund = new Hund('Barfield');

console.log(hund.toString()); // => Hund: Barfield
console.log(Hund._antal); // => 1
console.log(Hund.antal()); // => 1
console.log(hund._antal); // => undefined
try {
    console.log(hund.antal()); // => TypeError: hund.antal is not a function
} catch (e) {
    console.log(e.toString());
}
