const coefficients = {
    a: 1,
    c: 5,
};


function evaluate(x, co) {
    return co.a + co.b * x + co.c * Math.pow(x, 2);
}


const betterCoefficients = new Proxy(coefficients, {
    get(target, key) {
	return target[key] || 0;
    },
});

evaluate(5, betterCoefficients);


betterCoefficients.a;		// 1
betterCoefficients.b;		// 0
betterCoefficients.c;		// 5
betterCoefficients.d;		// 0
betterCoefficients.anything;	// 0
