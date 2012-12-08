Ext.define("Project.controller.widget.DoQnABtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			DoQnABtn : "DoQnABtn",
		},
		control : {
			DoQnABtn : {
				tap : "OnDoQnABtnTap",
			},
		},
	},
	OnDoQnABtnTap : function () {
		var data = DB.DoQnAMain.getValues();
		var flag = true;
		for (var key in data) {
			if (key == "QnATime") {
				data[key] = DoTime();
			};
			if (data[key] == "") {
				flag = false;
				DoAlert("请输入完整信息！");
			};
		};
		if (flag) {
			DB.DoQnAMain.submit({
				params : data,
				waitMsg : {
					xtype : "loadmask",
					message : "信息发布中 ...",
				},
				success : function (form, result) {
					DoAlert("发布成功！");
					form.reset();
				},
				failure : function  (form, result) {
					DoAlert("发布失败！");
					form.reset();
				},
			});
		};
	},
});
