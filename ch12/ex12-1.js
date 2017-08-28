require('core-js/fn/array/values');

const book = [
    "Twinkle, twinkle, little bat!",
    "How I wonder what you're at!",
    "Up above the world you fly.",
    "Like a tea tray in the sky.",
    "Twinkle, twinkle, little bat!",
    "How I wonder what you're at!",
];

const it = book.values();

it.next();
it.next();
it.next();
it.next();
it.next();
it.next();
it.next();
it.next();
it.next();
