Ext.define("Project.controller.widget.DoSnBBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			DoSnBBtn : "DoSnBBtn",
		},
		control : {
			DoSnBBtn : {
				tap : "OnDoSnBBtnTap",
			},
		},
	},
	OnDoSnBBtnTap : function () {
		var data = Ext.getCmp("DoSnBMain").getValues();
		var flag = true;
		for (var key in data) {
			if (key == "SnBTime") {
				data[key] = DoTime();
			};
			if (data[key] == "") {
				flag = false;
				DoAlert("请输入完整信息！");
			};
		};
		if (flag) {
			Ext.getCmp("DoSnBMain").submit({
				params : data,
				waitMsg : {
					xtype : "loadmask",
					message : "信息发布中 ...",
				},
				success : function (form, result) {
					DoAlert("发布成功！");
				},
				failure : function  (form, result) {
					DoAlert("发布失败！");
				},
			});
		};
	},
});
