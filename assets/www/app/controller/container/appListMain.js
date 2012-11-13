Ext.define("Project.controller.container.appListMain", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			appListMain : "appListMain",
		},
		control : {
			appListMain : {
				itemtap : "onAppListMainItemtap",
			},
		},
	},
	onAppListMainItemtap : function (list, index, target, record, e, eOpts) {
		var data = record.getData();
		for (var key in data) {
			if (!data[key]) {
				data[key] = "";
			};
		};
		if (data.checkIcon == "resources/icons/noIcon.png") {
			Ext.Msg.confirm(DB.versionInfo, "是否要订阅“" + data.appLocation + "  • " + data.appName + "”？", function (buttonId, value, opt) {
				if (buttonId == "yes") {
					DoSQL("INSERT INTO myApp"
						 + " (appId, appLocation, appName, appIconUrl)"
						 + " VALUES"
						 + " (\"" + data.appId + "\" ,\"" + data.appLocation + "\" ,\"" + data.appName + "\", \"" + data.appIconUrl + "\")");
					data.checkIcon = "resources/icons/Checked.png";
					list.getStore().load();
				};
			});
		};
		if (data.checkIcon == "resources/icons/Checked.png") {
			Ext.Msg.confirm(DB.versionInfo, "是否取消订阅“" + data.appLocation + "  • " + data.appName + "”？", function (buttonId, value, opt) {
				if (buttonId == "yes") {
					DoSQL("DELETE FROM myApp WHERE appId = \"" + data.appId + "\"");
					data.checkIcon = "resources/icons/noIcon.png";
					list.getStore().load();
				};
			});
		};
	},
});
