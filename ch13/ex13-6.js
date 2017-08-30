const getNextRainbowColor = (function() {
    const colors = ['red', 'orange', 'yellow', 'green',
		    'bule', 'indigo', 'violet'];
    let colorIndex = -1;
    return function() {
	if(++colorIndex >= color.length) colorIndex = 0;
	return colors[colorIndex];
    };
})();
