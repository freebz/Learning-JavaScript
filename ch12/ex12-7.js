function* rainbow() {  // * 기호는 제너레이터 문법입니다.
    yield 'red';
    yield 'orange';
    yield 'yellow';
    yield 'green';
    yield 'blue';
    yield 'indigo';
    yield 'violet';
}


const it = rainbow();
it.next();
it.next();
it.next();
it.next();
it.next();
it.next();
it.next();
it.next();


for(let color of rainbow()) {
    console.log(color);
}
