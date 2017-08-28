function* abc() {
    yield 'a';
    yield 'b';
    return 'c';
}

const it = abc();
it.next();
it.next();
it.next();


// "a"와 "b"는 출력되지만 "c"는 출력되지 않습니다.
for(let l of abc()) {
    console.log(l);
}
