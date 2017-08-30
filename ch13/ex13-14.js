function addThreeSquareAddFiveTakeSquareRoot(x) {
    // 설마 이런 이름을 짓지는 않겠지만...
    return Math.sqrt(Math.pow(x+3, 2)+5);
}

// 별명을 쓰기 전
const answer = (addThreeSquareAddFiveTakeSquareRoot(5) +
		addThreeSquareAddFiveTakeSquareRoot(2)) /
      addThreeSquareAddFiveTakeSquareRoot(7);

// 별명을 쓰면 이렇게 바뀝니다.
const f = addThreeSquareAddFiveTakeSquareRoot;
const answer = (f(5) + f(2)) / f(7);
