const input = "One line\nTwo lines\nThree lines\nFour";
const beginnings = input.match(/^\w+/mg); // ["One", "Two", "THree", "Four"]
const endings = input.match(/\w+$/mg);	  // ["line", "lines", "lines", "Four"]
