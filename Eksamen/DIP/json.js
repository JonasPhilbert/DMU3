let json = '{"x":1,"a":[true, null, "test"]}';
let objekt = JSON.parse(json);
console.log("%o", objekt); // => { x: 1, a: [ true, null, 'test', [length]: 3 ] }

// Bemærk: JSON understøtter ikke 'undefined'. Samme gælder selvfølgelig funktioner.
objekt = { x: 1, m: function() {}, a: [true, undefined, "test"] }; // Derfor bliver "m" afkastet, og 'undefined' bliver omformet til 'null'.
json = JSON.stringify(objekt);
console.log(json); // => {"x":1,"a":[true,null,"test"]}
