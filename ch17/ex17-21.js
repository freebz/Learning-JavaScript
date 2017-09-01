const input = "It was the best of times, it was the worst of times";
const beginning = input.match(/^\w+/g); // "It"
const end = input.match(/\w+$/g);	// "times"
const everything = input.match(/^.*$/g); // input과같습니다.
const nomatch1 = input.match(/^best/ig);
const nomatch2 = input.match(/worst$/ig);
