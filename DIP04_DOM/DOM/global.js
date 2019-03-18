let x = 1;
function f() {}
console.log(x); // => 1
console.log(window.x); // => undefined
console.log(window.f); // => ƒ f() {}
console.log(window);
// => Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
