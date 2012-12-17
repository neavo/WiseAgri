var screenHeight = window.screen.height;
var screenWidth = window.screen.width;
var userAgent = navigator.userAgent.toLowerCase();
if (!userAgent.match(/windows/i) && screenHeight >= 1024 && screenWidth >= 600) {
	var meta = document.getElementsByTagName("meta");
	meta[0].name = "viewport";
	meta[0].content = "target-densitydpi=320";
	var style = document.createElement("style");
	style.type = "text/css";
	style.innerHTML = "html { font-size : 200% }";
	document.getElementsByTagName("HEAD").item(0).appendChild(style);
};
if (!userAgent.match(/windows/i) && screenHeight >= 800 && screenHeight < 1024 && screenWidth >= 480 && screenWidth < 600) {
	var meta = document.getElementsByTagName("meta");
	meta[0].name = "viewport";
	meta[0].content = "target-densitydpi=240";
	var style = document.createElement("style");
	style.type = "text/css";
	style.innerHTML = "html { font-size : 150% }";
	document.getElementsByTagName("HEAD").item(0).appendChild(style);
};
