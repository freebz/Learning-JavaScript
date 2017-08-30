const rainbowIterator = getRainbowIterator();
setInterval(function() {
    document.querySelector('.rainbow')
	.style['background-color'] = rainbowIterator.next().value;
}, 500);
