// 服务器数据
//var ServerUrl = "http://221.235.190.13:8080/WiseAgriAjax/";
var ServerUrl = "http://192.168.1.100:8081/WiseAgriAjax/";

// 本地数据
var DB = [];
var scaleFlag = 0;
var ScreenWidth = 0;
var ScreenHeight = 0;

// 加载默认基本数据
var defaultBase = [];
var defaultBaseLoaded = false;
function loadDefaultBase() {
	defaultApp = [];
	defaultAppLoaded = false;
	Ext.getStore("defaultBaseStore").load(function (records, operation, success) {
		if (success && records.lenght != 0) {
			for (var key in records) {
				defaultBase.push(records[key].getData());
			};
		};
		defaultBaseLoaded = true;
	});
};

// 加载默认app数据
var defaultApp = [];
var defaultAppLoaded = false;
function loadDefaultApp() {
	defaultApp = [];
	defaultAppLoaded = false;
	Ext.getStore("defaultAppStore").load(function (records, operation, success) {
		if (success && records.lenght != 0) {
			for (var key in records) {
				defaultApp.push(records[key].getData());
			};
		};
		defaultAppLoaded = true;
	});
};

// 加载默认频道数据
var defaultCategory = [];
var defaultCategoryLoaded = false;
function loadDefaultCategory() {
	defaultCategory = [];
	defaultCategoryLoaded = false;
	Ext.getStore("defaultCategoryStore").load(function (records, operation, success) {
		if (success && records.lenght != 0) {
			for (var key in records) {
				defaultCategory.push(records[key].getData());
			};
		};
		defaultCategoryLoaded = true;
	});
};

// 加载订购数据
var myOrder = [];
var myOrderLoaded = false;
function loadMyOrder() {
	myOrder = [];
	myOrderLoaded = false;
	if (SQLite) {
		SQLite.transaction(function (shell) {
			shell.executeSql("SELECT * FROM myOrder ORDER BY type", [], function (shell, results) {
				myOrder = SqlToJson(results);
				myOrderLoaded = true;
			}, errorSQL);
		}, errorSQL);
	} else {
		myOrderLoaded = true;
	};
};

// PhoneGap
var SQLite = "";
document.addEventListener("deviceready", function () {
	// 响应返回键
	document.addEventListener("backbutton", function () {
		DoPrevSwitch();
	}, false);
	
	// 初始化SQLite数据库对象
	SQLite = window.openDatabase("WiseAgri", "1.0", "WiseAgri Datebase", 1048576);
	DoSQL("CREATE TABLE IF NOT EXISTS myOrder"
		 + " (type VARCHAR(128), id VARCHAR(128), name VARCHAR(128), iconUrl VARCHAR(1024), style VARCHAR(128), location VARCHAR(128))")
}, false);

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

// 自定义的Time
function DoTime() {
	var eDate = new Date();
	var time = eDate.getFullYear();
	if (Number(eDate.getMonth()) + 1 < 10) {
		time = time + "-" + "0" + (Number(eDate.getMonth()) + 1).toString();
	} else {
		time = time + "-" + (Number(eDate.getMonth()) + 1).toString();
	};
	if (Number(eDate.getDate()) < 10) {
		time = time + "-" + "0" + Number(eDate.getDate()).toString();
	} else {
		time = time + "-" + Number(eDate.getDate()).toString();
	};
	time = time + " " + eDate.toLocaleTimeString();
	return time;
};

// 自定义的Alert
function DoAlert(msg) {
	Ext.Msg.alert("", msg);
};

// 自定义的Load
function DoLoad(store, url, page) {
	store.setProxy({
		type : "jsonp",
		url : ServerUrl + url,
	});
	store.load();
};

// 切换页面
var History = [];
function DoPrevSwitch() {
	History.pop();
	if (History.length == 0) {
		Ext.Msg.confirm("", "确定退出？", function (buttonId, value, opt) {
			if (buttonId == "yes") {
				navigator.app.exitApp();
			};
		});
	};
	if (History.length != 0) {
		var View = History[History.length - 1];
		DB.mainContainer.setActiveItem(View);
	};
};
function DoNextSwitch(View) {
	History.push(View);
	DB.mainContainer.setActiveItem(View);
};

// 切换至相册页面
var activatedAlbum = "";
function setActivatedAlbum(album) {
	activatedAlbum = album;
};
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
	DoNextSwitch("albumView");
	Ext.getCmp("albumViewMain").removeAll(true);
	setAlbumGrid(activatedAlbum, Ext.getCmp("albumViewMain"));
	Ext.getCmp("albumViewMain").setActiveItem(0);
};
