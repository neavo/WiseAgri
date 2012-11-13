// 服务器数据
var Website = {
	serverUrl : "http://221.235.190.14:8080/AjaxServer/",
};

// 本地数据库
var DB = {
	versionInfo : "智慧 • 农业 v1.0",
	myApp : [],
	activatedController : "",
	activatedCategory : "",
	activatedAlbum : "",
	albumPage : 1,
	scaleFlag : 0,
};

// 创建SQLite数据库对象
var SQLite = "";

// PhoneGap
{
	// 等待PhoneGap加载完毕
	document.addEventListener("deviceready", onDeviceReady, false);
	function onDeviceReady() {
		// 加载完毕以后干掉启动闪屏
		cordova.exec(null, null, "SplashScreen", "hide", []);
		
		// 响应返回键
		document.addEventListener("backbutton", onBackButtonTap, false);
		
		// 响应返回键
		function onBackButtonTap() {
			DB.activatedController.goBack();
		};
		
		// 初始化SQLite数据库对象
		SQLite = window.openDatabase("WiseAgri", "1.0", "WiseAgri Datebase", 1048576);
		DoSQL("CREATE TABLE IF NOT EXISTS myApp"
			 + " (appId VARCHAR(128), appLocation VARCHAR(128), appName VARCHAR(128), appIconUrl VARCHAR(1024))");
	};
};

// SQL相关函数
function errorSQL(error) {
	console.log("Error processing SQL: " + error.code);
};
function SqlToJson(results) {
	var json = "[";
	var length = results.rows.length;
	for (var i = 0; i < length; i++) {
		var item = results.rows.item(i);
		json = json + "{";
		for (var key in item) {
			if (item[key] != "" && item[key] != null)
				json = json + "\"" + key + "\"" + " : " + "\"" + item[key] + "\"" + ",";
		};
		json = json + "},";
	};
	json = json + "]";
	return eval("(" + json + ")");
};
function DoSQL(sql) {
	if (SQLite) {
		SQLite.transaction(function (shell) {
			shell.executeSql(sql);
		}, errorSQL);
	};
};

// 设置正在使用的Object
function setActivatedController(controller) {
	DB.activatedController = controller;
};
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

// 切换至相册页面
function DoShowAlbum() {
	DB.albumPage = 1;
	DoSwitch("albumView");
	DB.albumViewTop.setTitle(DB.albumPage + " / " + DB.activatedAlbum.length);
	DB.albumViewMain.setHtml("<img class = albumImage src = " + DB.activatedAlbum[DB.albumPage - 1] + ">");
};
