Ext.define("Project.controller.widget.SwitchBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			SwitchBtn : "SwitchBtn",
		},
		control : {
			SwitchBtn : {
				tap : "onSwitchBtnTap",
			},
		},
	},
	onSwitchBtnTap : function () {
		var SwitchBtn = this.getSwitchBtn();
		Ext.Msg.prompt("", "输入要跳转的页数：", function (buttonId, value) {
			if (buttonId == "ok" && value != "" && !isNaN(parseInt(value))) {
				activatedStore.loadPage(parseInt(value), {
					callback : function (records, operation, success) {
						if (records.length == 0 || !success) {
							DoAlert("无指定页数，返回第一页！");
							activatedStore.loadPage(1);
						};
						SwitchBtn.setText("第 " + activatedStore.currentPage + " 页");
					},
				});
			};
		});
	},
});
