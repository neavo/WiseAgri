Ext.define("Project.controller.widget.myAppBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			myAppBtn : "myAppBtn",
		},
		control : {},
	},
	launch : function () {
		this.getMyAppBtn().addListener({
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
		});
	},
});
