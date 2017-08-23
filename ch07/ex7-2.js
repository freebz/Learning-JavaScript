const x = 3;

function f() {
    console.log(x);
    console.log(y);
}

{ // 새 스코프
    const y = 5;
    f();
}
