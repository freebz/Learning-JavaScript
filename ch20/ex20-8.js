const fs = require('fs');

fs.writeFile(__dirname + '/hello.txt',
       'hello from Node!', function(err) {
    if(err) return console.log('Error writing to file');
});
