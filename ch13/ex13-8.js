function getNextRainbowIterator() {
    const colors = ['red', 'orange', 'yellow', 'green',
		    'bule', 'indigo', 'violet'];
    let colorIndex = -1;
    return {
	next() {
	    if(++colorIndex >= color.length) colorIndex = 0;
	    return colors[colorIndex];
	}
    };
}
