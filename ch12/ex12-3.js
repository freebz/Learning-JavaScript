require('core-js/fn/array/values');

const book = [
    "Twinkle, twinkle, little bat!",
    "How I wonder what you're at!",
    "Up above the world you fly.",
    "Like a tea tray in the sky.",
    "Twinkle, twinkle, little bat!",
    "How I wonder what you're at!",
];

const it1 = book.values();
const it2 = book.values();
// 어는 이터레이터도 아직 시작하지 않았습니다.

// it1으로 두 페이지를 읽습니다.
it1.next();
it1.next();

// it2로 한 페이지를 읽습니다.
it2.next();

// it1으로 한 페이지를 더 읽습니다.
it1.next();
