// 服务器数据
var ServerUrl = ""
	
// 本地数据库
var DB = {
	versionInfo : "智慧 • 农业 v1.0",
	myApp : [],
	activatedController : "",
	activatedCategory : "",
	activatedAlbum : "",
	scaleFlag : 0,
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
			DB.activatedController.goBack();
		}, false);
		
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
function setActivatedAlbum(album) {
	DB.activatedAlbum = album;
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
	var j = 0;
	var k = 0;
	var vContainer = "";
	var hContainer = "";
	for (i = 0; i < 3; i++) {
		if (i == 0 && j == 0) {
			vContainer = Ext.create("Ext.Container", {
					layout : "vbox",
				});
		};
		hContainer = Ext.create("Ext.Container", {
				layout : "hbox",
			});
		for (j = 0; j < 2; j++) {
			hContainer.add(Ext.create("Ext.Spacer"));
			if (image[k]) {
				hContainer.add(Ext.create("Ext.Container", {
						html : "<img class = albumImage src = " + image[k] + " />",
						listeners : {
							tap : {
								fn : function () {},
								element : "element",
							},
						},
					}));
			} else {
				hContainer.add(Ext.create("Ext.Container", {
						html : "<img class = albumSpacerImage src = resources/icons/noIcon.png />",
					}));
			};
			k = k + 1;
		};
		hContainer.add(Ext.create("Ext.Spacer"));
		vContainer.add(Ext.create("Ext.Spacer"));
		vContainer.add(hContainer);
	};
	vContainer.add(Ext.create("Ext.Spacer"));
	carousel.add(vContainer);
	if (image[k]) {
		setAlbumGrid(image.slice(k), carousel);
	};
};
function DoShowAlbum() {
	DoSwitch("albumView");
	DB.albumViewMain.removeAll(true);
	setAlbumGrid(DB.activatedAlbum, DB.albumViewMain);
	DB.albumViewMain.setActiveItem(0);
};
