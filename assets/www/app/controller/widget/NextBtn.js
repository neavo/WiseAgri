Ext.define("Project.controller.widget.NextBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			NextBtn : "NextBtn",
			SwitchBtn : "SwitchBtn",
		},
		control : {
			NextBtn : {
				tap : "onNextBtnTap",
			},
		},
	},
	onNextBtnTap : function () {
		activatedStore.nextPage({
			callback : function (records, operation, success) {
				if (records.length != 0 && success) {
					this.getSwitchBtn().setText("第 " + activatedStore.currentPage + " 页");
				} else {
					activatedStore.previousPage();
				};
			},
			scope : this,
		});
	},
});
