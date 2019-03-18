// Ligesom i Lua, kan funktioner agere som variabler.
let execute = function(func, ...params) {
    return func(params[0] && params[0]);
}

execute(function(arg) {
    console.log(arg);
}, "bacon");

// Funktioner kan defineres med et smart shorthand.
const square = i => i * i;
console.log(square(3));

const add = (a, b) => a + b; // const add = (a, b) => return a + b;
console.log(add(2, 8));

// Hvis en metode kaldes med for mange parametre, vil de overskydende parametre blive forkastet.
function pig(sound) {
    if (sound) console.log("oink!");
}
pig(true, "rheeek!");

// Ligeledes vil parametre, som ikke er medgivet et funktionskald blive til <undefined>.
function hog(sound, loud) {
    let str = "oink";
    if (loud) str += "!";
    console.log(str);
}
hog(true);

// Parametre kan gives default values.
function bigHog(sound, loud = true) {
    let str = "oink";
    if (loud) str += "!";
    console.log(str);
}
bigHog(true);

/*
"En lokal funktion gemmer en kopi (closure)af de omgivende scopes,
hvori den er erklæret - hvis den returneres eller videregives af sin omgivende funktion."

"Dermed får hver ekstern udgave af en lokal funktion sin egen private hukommelse."

[See 'closure.js' fra Lektion01]
*/
function next() {
    let n = 1;
    return function() {return n++};
}
const next1 = next();
const next2 = next();
console.log(next1());
console.log(next1());
console.log(next2());

// Closure bruges bl.a. ved callbacks.
function afvent(v) {
    function callback() {console.log(v);}
    setTimeout(callback, 1000);
    console.log("Afventer...");
}
afvent("Hej");
afvent("Erik");

// Hvis man har en allerede eksisterende variable, kan denne defineres for et objekt når dette skabes.
let name = "Jonas";
let person = {name, age: 22};
console.log(person);

// Objekter kan gennemløbes med for-in. For-of loops kan ikke bruges. De kan kun benyttes for arrays/lister.
let dict = {a: 1, b: 2, c: 3};
for (let k in dict) {
    console.log(k);
}

let list = [1, 2, 3];
for (let v in list) {
    console.log(v);
}



// Array-metoder.
let arr = [0, 1, 2, 3];
console.log(arr);
arr.push(4);
console.log(arr.shift());
console.log(arr);

let taetArr = [1, 2, 3];
let hulletArr = [1, 2];
hulletArr[5] = 3;
console.log(taetArr + " (" + taetArr.length + ")");
console.log(hulletArr + " (" + hulletArr.length + ")");
console.log(hulletArr);

// Resterende argumenter kan indtages som et array.
function sum(a, b, ...bacon) {
    let sum = a + b;
    for (let e of bacon)
        sum += e;

    return sum;
}
console.log(sum(1, 1, 1, 1)); // => 4
console.log(sum(1, 1)); // => 2