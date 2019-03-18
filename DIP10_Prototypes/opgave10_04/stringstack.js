class StringStack {
    constructor() {
        this._i = 0;
        this._arr = [];
    }

    push(e) {
        this._arr[this._i++] = e;
    }

    pop() {
        return this._i > 0 ? this._arr[--this._i] : this._arr[this._i];
    }
}

let stack = new StringStack();
console.log(stack.pop());
stack.push("Alexander");
stack.push("Oscar");
stack.push("Morten");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());