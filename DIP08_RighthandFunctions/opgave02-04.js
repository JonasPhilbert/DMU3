let p0 = {
    name: "Jonas",
    phone: "50523263",
    email: "jonas@priestyard.dk",
}

let p1 = {
    name: "Oscar",
    phone: "88888888",
    email: "TheOsca@hotmail.dk",
}

let p2 = {
    name: "Alexander",
    phone: "86800132",
    email: "SkouNetworks@gmail.com",
}

console.log(p1);
delete p1.phone;
p1.email = "TheOsca@hotmail.com";
console.log(p1);
console.log(p1.name);