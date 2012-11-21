// 服务器数据
var ServerUrl = "http://221.235.190.13:8080/WiseAgriAjax/";
//var ServerUrl = "http://localhost:8080/WiseAgriAjaxR/";

// 本地数据
var scaleFlag = 0;
var VersionInfo = "";

// 加载默认app数据
var defaultApp = [];
function loadDefaultApp() {
	Ext.getStore("defaultAppStore").load({
		callback : function (records, operation, success) {
			if (success && records.lenght != 0) {
				defaultApp = [];
				for (var key in records) {
					defaultApp = records[key].getData();
				};
			};
		},
		scope : this,
	});
};

// 加载默认频道数据
var defaultCategory = [];
function loadDefaultCategory() {
	Ext.getStore("defaultCategoryStore").load({
		callback : function (records, operation, success) {
			if (success && records.lenght != 0) {
				defaultCategory = [];
				for (var key in records) {
					defaultCategory.push(records[key].getData());
				};
			};
		},
		scope : this,
	});
};

// 加载订购app数据
var myApp = [];
function loadMyApp() {
	if (SQLite) {
		SQLite.transaction(function (shell) {
			shell.executeSql("SELECT * FROM myApp ORDER BY appId", [], function (shell, results) {
				myApp = [];
				myApp = SqlToJson(results);
			}, errorSQL);
		}, errorSQL);
	};
};

// 加载订购app数据
var myCategory = [];
function loadMyCategory() {
	if (SQLite) {
		SQLite.transaction(function (shell) {
			shell.executeSql("SELECT * FROM myCategory ORDER BY categoryId", [], function (shell, results) {
				myCategory = [];
				myCategory = SqlToJson(results);
			}, errorSQL);
		}, errorSQL);
	};
};

// 创建SQLite数据库对象
var SQLite = "";

// PhoneGap
{
	// 等待PhoneGap加载完毕
	document.addEventListener("deviceready", onDeviceReady, false);
	function onDeviceReady() {
		// 响应返回键
		document.addEventListener("backbutton", function () {
			activatedController.goBack();
		}, false);
		
		// 初始化SQLite数据库对象
		SQLite = window.openDatabase("WiseAgri", "1.0", "WiseAgri Datebase", 1048576);
		DoSQL("CREATE TABLE IF NOT EXISTS myApp"
			 + " (appId VARCHAR(128), appLocation VARCHAR(128), appName VARCHAR(128), appIconUrl VARCHAR(1024))");
		DoSQL("CREATE TABLE IF NOT EXISTS myCategory"
			 + " (categoryId VARCHAR(128), categoryStyle VARCHAR(128), categoryName VARCHAR(128), categoryIconUrl VARCHAR(1024))");
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
			if (item[key])
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
var activatedController = "";
function setActivatedController(controller) {
	activatedController = controller;
};
var activatedAlbum = "";
function setActivatedAlbum(album) {
	activatedAlbum = album;
};

// 自定义的Console.log
function DoLog(object) {
	console.log(object);
};

// 自定义的Alert
function DoAlert(msg) {
	Ext.Msg.alert(VersionInfo, msg);
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
function setAlbumGrid(image, carousel) {
	var i = 0;
	var k = 0;
	var container = Ext.create("Ext.Container", {
			layout : "vbox",
		});
	for (i = 0; i < 2; i++) {
		container.add(Ext.create("Ext.Spacer"));
		if (image[k]) {
			container.add(Ext.create("Ext.Container", {
					html : "<div class = albumImageDiv>"
					 + "<img class = albumImage src = " + image[k] + " />"
					 + "</div>",
				}));
		} else {
			container.add(Ext.create("Ext.Container", {
					html : "<div class = albumImageDiv>"
					 + "<img class = albumSpacerImage src = resources/icons/noIcon.png />"
					 + "</div>",
				}));
		};
		k = k + 1;
	};
	container.add(Ext.create("Ext.Spacer"));
	carousel.add(container);
	if (image[k]) {
		setAlbumGrid(image.slice(k), carousel);
	};
};
function DoShowAlbum() {
	DoSwitch("albumView");
	DB.albumViewMain.removeAll(true);
	setAlbumGrid(activatedAlbum, DB.albumViewMain);
	DB.albumViewMain.setActiveItem(0);
};
