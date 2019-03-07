var xhr = new XMLHttpRequest(),
	stylesheet = 'stable.css';


xhr.open("GET", "/" + stylesheet, false);
xhr.send();
chrome.devtools.panels.applyStyleSheet(xhr.responseText);
