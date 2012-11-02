// PhoneGap
var pictureSource;
var destinationType; 
{
	document.addEventListener("deviceready", onDeviceReady, false);
	function onDeviceReady() {
		// 加载完毕以后干掉启动闪屏
		cordova.exec(null, null, "SplashScreen", "hide", []);
		
		// 响应返回键
		document.addEventListener("backbutton", onBackButtonTap, false);
		
		// 初始化照相机参数
		pictureSource = navigator.camera.PictureSourceType;
		destinationType = navigator.camera.DestinationType;
	};
	// 响应返回键
	function onBackButtonTap() {
		DB.activatedController.goBack();
	};
};
