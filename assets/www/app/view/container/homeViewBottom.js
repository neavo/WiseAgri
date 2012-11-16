Ext.define("Project.view.container.homeViewBottom", {
	extend : "Ext.Toolbar",
	xtype : "homeViewBottom",
	config : {
		docked : "bottom",
		items : [{
				xtype : "spacer",
			}, {
				xtype : "container",
				html : "<img class = toolbarBtnIcon src = resources/icons/customCategoryBtn.png />",
				listeners : {
					tap : {
						fn : function () {
							DoSwitch("appList");
							Ext.getStore("appListStore").setProxy({
								type : "jsonp",
								url : ServerUrl + "GetAppList.jsp?appId=" + defaultApp.appId,
							});
							Ext.getStore("appListStore").load({
								callback : function (records, operation, success) {
									if (success && records.length != 0) {
										var Data = [];
										for (var Key in records) {
											var flag = false;
											var data = records[Key].getData();
											for (var key in DB.myApp) {
												if (data["appId"] == DB.myApp[key]["appId"]) {
													flag = true;
												};
											};
											if (flag) {
												data.checkIcon = "resources/icons/Checked.png";
											} else {
												data.checkIcon = "resources/icons/noIcon.png";
											};
											Data.push(data);
										};
										DB.appListMain.getStore().setData(Data);
									};
								},
								scope : this
							});
						},
						element : "element",
					},
				},
			}, {
				xtype : "container",
				html : "<div class = toolbarBtnName ><b>订阅新频道</b></div>",
				listeners : {
					tap : {
						fn : function () {
							DoSwitch("appList");
							Ext.getStore("appListStore").setProxy({
								type : "jsonp",
								url : ServerUrl + "GetAppList.jsp?appId=" + defaultApp.appId,
							});
							Ext.getStore("appListStore").load({
								callback : function (records, operation, success) {
									if (success && records.length != 0) {
										var Data = [];
										for (var Key in records) {
											var flag = false;
											var data = records[Key].getData();
											for (var key in DB.myApp) {
												if (data["appId"] == DB.myApp[key]["appId"]) {
													flag = true;
												};
											};
											if (flag) {
												data.checkIcon = "resources/icons/Checked.png";
											} else {
												data.checkIcon = "resources/icons/noIcon.png";
											};
											Data.push(data);
										};
										DB.appListMain.getStore().setData(Data);
									};
								},
								scope : this
							});
						},
						element : "element",
					},
				},
			}, {
				xtype : "spacer",
			}, {
				xtype : "container",
				html : "<img class = toolbarBtnIcon src = resources/icons/myAccountBtn.png >",
			}, {
				xtype : "container",
				html : "<div class = toolbarBtnName ><b>我的工作台</b></div>",
			}, {
				xtype : "spacer",
			},
		],
	},
});
