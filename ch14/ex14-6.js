const fs = require('fs');

fs.readFile('a.txt', function(err, dataA) {
    if(err) console.error(err);
    fs.readFile('b.txt', function(err, dataB) {
	if(err) console.error(err);
	fs.readFile('c.txt', function(err, dataC) {
	    if(err) console.error(err);
	    setTimeout(function() {
		fs.writeFile('d.txt', dataA+dataB+dataC, function(err) {
		    if(err) console.error(err);
		});
	    }, 60*1000);
	});
    });
});
