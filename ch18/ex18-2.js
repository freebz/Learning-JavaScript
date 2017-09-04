function printDOM(node, prefix) {
    console.log(prefix + node.nodeName);
    for(let i=0; i<node.childNOdes.length; i++) {
	printDOM(node.childNOdes[i], prefix = '\t');
    }
}
printDOM(document, '');
