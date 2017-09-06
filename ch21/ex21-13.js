const coefficients = {
    a: 1,
    c: 5,
};


function evaluate(x, co) {
    return co.a + co.b * x + co.c * Math.pow(x, 2);
}


evaluate(5, coefficients);	// NaN
