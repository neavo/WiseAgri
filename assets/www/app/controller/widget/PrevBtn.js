Ext.define("Project.controller.widget.PrevBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			PrevBtn : "PrevBtn",
			SwitchBtn : "SwitchBtn",
		},
		control : {
			PrevBtn : {
				tap : "onPrevBtnTap",
			},
		},
	},
	onPrevBtnTap : function () {
		if (activatedStore.currentPage == 1) {
			DoAlert("当前已是第一页！");
		} else {
			activatedStore.previousPage();
			this.getSwitchBtn().setText("第 " + activatedStore.currentPage + " 页");
		};
	},
});
