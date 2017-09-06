const USER_EMAIL = Symbol();
class User {
    setEmail(value) {
	if(!/@/.test(value)) throw new Error(`invalid email: ${value}`);
	this[USER_EMAIL] = value;
    }

    getEmail() {
	return this[USER_EMAIL];
    }
}


const u = new User();
u.email = "john@node.com";
console.log(`User email: ${u.email}`);
