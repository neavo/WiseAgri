// PhoneGap
{
	// 等待PhoneGap加载完毕
	document.addEventListener("deviceready", onDeviceReady, false);
	function onDeviceReady() {
		// 加载完毕以后干掉启动闪屏
		cordova.exec(null, null, "SplashScreen", "hide", []);
		
		// 响应返回键
		document.addEventListener("backbutton", onBackButtonTap, false);
	};
	// 响应返回键
	function onBackButtonTap() {
		DB.activatedController.goBack();
	};
};

// 设置正在使用的Controller
function setActivatedController(controller) {
	DB.activatedController = controller;
};

// 设置正在读取的频道
function setActivatedCategory(category) {
	DB.activatedCategory = category;
};

// 切换页面
function DoSwitch(view) {
	var items = DB[view].getItems();
	var length = items.length;
	for (var i = 0; i < length; i++) {
		DB[view].getAt(i).hide();
	};
	DB.mainContainer.setActiveItem(DB[view]);
	setActivatedController(DB.mainController.getApplication().getController(view));
	for (var i = 0; i < length; i++) {
		DB[view].getAt(i).show();
	};
};
