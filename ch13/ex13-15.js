const Money = require('math-money');  // require는 라이브러리를 불러오는
				      // 노드 함수입니다.

const oneDollar = Money.Dollar(1);

// Money.Dollar도 길게 느껴지면 이렇게 해도 됩니다.
const Dollar = Money.Dollar;
const twoDollars = Dollar(2);
// oneDollar와 twoDollars는같은 타입의 인  인스턴스입니다.
