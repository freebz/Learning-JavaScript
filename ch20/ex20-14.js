const fs = require('fs');
const path = require('path');

try {
    fs.writeFileSync(path.join(__dirname, 'hello.txt'), 'hello from Node!');
} catch(err) {
    console.error('Error writing file.');
}
