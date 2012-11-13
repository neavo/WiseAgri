Ext.define("Project.view.container.homeViewBottom", {
	extend : "Ext.Toolbar",
	xtype : "homeViewBottom",
	config : {
		docked : "bottom",
		items : [{
				xtype : "spacer",
			}, {
				xtype : "container",
				html : "<img class = homeViewIcon src = resources/icons/customCategoryBtn.png >",
				listeners : {
					tap : {
						fn : function () {
							Ext.getStore("webAppStore").load({
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
							DoSwitch("appList");
						},
						element : "element",
					},
				},
			}, {
				xtype : "container",
				html : "<div class = homeViewName ><b>订阅新频道<b></div>",
			}, {
				xtype : "spacer",
			}, {
				xtype : "myAccountBtn",
			}, {
				xtype : "container",
				html : "<div class = homeViewName ><b>我的工作台<b></div>",
			}, {
				xtype : "spacer",
			},
		],
	},
});
