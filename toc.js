(function(window) {
	String.prototype.repeat = function(num) {
		return new Array(num + 1).join(this);
	};
	var url = document.URL,
		headers = jQuery("article :header"),
		result;
	for (var i = 3; i < headers.length; i++) { //skip H1, history, and toc
		var header = headers[i],
			headerText = header.textContent.trim();
		var anchorText = headerText.toLowerCase();
		anchorText = anchorText.replace(" ", "-");
		anchorText = anchorText.replace(/，|：|、/g, "");
		var hIndex = parseInt(header.nodeName.substring(1)) - 1,
			indent = "  ".repeat(hIndex),
			link = ['<pre>', indent, '* [', headerText, '](', '#', anchorText, ')', '\n', '</pre>'];
		result += link.join('');
	}
	var win = window.open("", "win");
	win.document.body.innerHTML = result;

})(window);