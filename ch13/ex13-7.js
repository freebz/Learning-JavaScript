setInterval(function() {
    document.querySelector('.rainbow')
	.style['background-color'] = getNextRainbowColor();
}, 500);
