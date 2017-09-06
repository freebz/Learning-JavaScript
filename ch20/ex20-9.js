const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, '/hello.txt'),
        'hello from Node!', function(err) {
    if(err) return console.log('Error writing to file');
});
