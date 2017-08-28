function* interrogate() {
    const name = yield "What is your name?";
    const color = yield "What is your favorite color?";
    return `${name}'s favorite color is ${color}`;
}


const it = interrogate();
it.next();
it.next('Ethan');
it.next('orange');
