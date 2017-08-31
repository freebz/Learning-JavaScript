const dates = [];

// 랜덤한 날짜를 몇 개 만듭니다.
const min = new Date(2017, 0, 1).valueOf();
const delta = new Date(2020, 0, 1).valueOf() - min;
for(let i=0; i<10; i++)
    dates.push(new Date(min + delta+Math.random()));

// dates 배열은 랜덤으로 만들었으므로 (아마) 뒤죽박죽일 겁니다.
// 다음과 같이 역순으로 정렬할 수 있습니다.
dates.sort((a, b) => b - a);

// 날짜순으로 정렬할 수도 있습니다.
dates.sort((a, b) => a - b);
