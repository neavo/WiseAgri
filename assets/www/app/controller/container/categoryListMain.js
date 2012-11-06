Ext.define("Project.controller.container.categoryListMain", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			categoryListMain : "categoryListMain",
		},
		control : {
			categoryListMain : {
				itemtap : "onCategoryListMainItemtap",
			},
		},
	},
	onCategoryListMainItemtap : function (list, index, target, record, e, eOpts) {
		var data = record.getData();
		if (data.categoryListCheck == "resources/icons/noIcon.png") {
			Ext.Msg.confirm(DB.versionInfo, "是否要订阅“" + data.categoryName + "”？", function (buttonId, value, opt) {
				for (var key in data) {
					if (!data[key]) {
						data[key] = "";
					};
				};
				if (buttonId == "yes") {
					DoSQL("INSERT INTO customCategory"
						 + " (appId, categoryId, categoryName, categoryLevel, categoryIconUrl, categoryStyle, extraParam)"
						 + " VALUES" + " (\"" + data.appId + "\" ,\"" + data.categoryId + "\" ,\"" + data.categoryName + "\", \""
						 + data.categoryLevel + "\", \"" + data.categoryIconUrl + "\", \"" + data.categoryStyle + "\", \"" + data.extraParam + "\")");
					if (data.categoryStyle == "parentCategory") {
						var store = Ext.getStore("webCategoryStore");
						var count = store.getCount();
						var array = data.extraParam.split(";");
						for (var i = 0; i < count; i++) {
							for (var k in array) {
								if (store.getAt(i).get("categoryId") == array[k]) {
									var eData = store.getAt(i).getData();
									for (var key in eData) {
										if (!eData[key]) {
											eData[key] = "";
										};
									};
									DoSQL("INSERT INTO customCategory"
										 + " (appId, categoryId, categoryName, categoryLevel, categoryIconUrl, categoryStyle, extraParam)"
										 + " VALUES" + " (\"" + eData.appId + "\" ,\"" + eData.categoryId + "\" ,\"" + eData.categoryName + "\", \""
										 + eData.categoryLevel + "\", \"" + eData.categoryIconUrl + "\", \"" + eData.categoryStyle + "\", \"" + eData.extraParam + "\")");
								};
							};
						};
					};
					data.categoryListCheck = "resources/icons/Checked.png";
					list.getStore().load();
				};
			});
		};
		if (data.categoryListCheck == "resources/icons/Checked.png") {
			Ext.Msg.confirm(DB.versionInfo, "是否要取消订阅“" + data.categoryName + "”？", function (buttonId, value, opt) {
				if (buttonId == "yes") {
					data.categoryListCheck = "resources/icons/noIcon.png";
					DoSQL("DELETE FROM customCategory WHERE categoryId = \"" + data.categoryId + "\"");
					if (data.categoryStyle == "parentCategory") {
						var store = Ext.getStore("webCategoryStore");
						var count = store.getCount();
						var array = data.extraParam.split(";");
						for (var i = 0; i < count; i++) {
							for (var k in array) {
								if (store.getAt(i).get("categoryId") == array[k]) {
									DoSQL("DELETE FROM customCategory WHERE categoryId = \"" + store.getAt(i).get("categoryId") + "\"");
								};
							};
						};
					};
					list.getStore().load();
				};
			});
		};
	},
});
