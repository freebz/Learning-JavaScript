const obj = { foo: "bar" };
Object.getOwnPropertyDescriptor(obj, 'foo');

Object.defineProperty(obj, 'foo', { writable: false });

obj.foo = 3;
// TypeError: Cannot assign to read only property 'foo' of [object Object]


Object.defineProperty(obj, 'color', {
    get: function() { return this._color; },
    set: function() { this._color = value; },
});


Object.defineProperty(obj, 'name', {
    value: 'Cynthia',
});
Object.defineProperty(obj, 'greet', {
    value: function() { return `Hello, my name is ${this.name}!`; }
});
