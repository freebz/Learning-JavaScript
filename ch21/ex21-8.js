const arr = [3, 1.5, 9, 2, 5.2];
Object.defineProperties(arr, {
    sum: {
	value: function() { return this.reduce((a, x) => a+x); },
	enumerable: false
    },
    avg: {
	value: function() { return this.sum()/this.length; },
	enumerable: false
    }
});
