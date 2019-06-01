function foo() {
    1 + 1;
}

bar = () => 1 + 1;

console.log(foo()); // => undefined
console.log(bar()); // => 2
