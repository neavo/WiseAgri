var SplashScreenImageSrc = [
	"resources/SplashScreen/SplashScreen_01.jpg",
	"resources/SplashScreen/SplashScreen_02.jpg",
	"resources/SplashScreen/SplashScreen_03.jpg",
];

function HideSplashScreen() {
	document.getElementById("SplashScreen").style.display = "none";
};

document.write("<div id = SplashScreen >"
	 + " <img id = SplashScreenImage src = " + SplashScreenImageSrc[0] + " style = \" height : 100%; width : 100%; \" />"
	 + " <img id = SplashScreenImageSkipBtn onclick = \"HideSplashScreen()\" src = resources/icons/SkipSplashScreen.png style = \" width : 5em; height : 5em; position : fixed; right : 0.5em; bottom : 0.5em; \"  />"
	 + " <div>");

var key = 2;
var handle = setInterval(function () {
		var Src = SplashScreenImageSrc[key - 1];
		if (Src) {
			document.getElementById("SplashScreenImage").src = Src;
			key = key + 1;
		} else {
			document.getElementById("SplashScreen").style.display = "none";
			clearInterval(handle);
		};
	}, 3000);
