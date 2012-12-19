Ext.define("Project.controller.widget.PrevBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			PrevBtn : "PrevBtn",
		},
		control : {
			PrevBtn : {
				tap : "onPrevBtnTap",
			},
		},
	},
	onPrevBtnTap : function () {
		if (activatedStore.currentPage > 1){
			activatedStore.previousPage();
		};
		if (activatedStore.currentPage == 1){
			DoAlert("当前已是第一页！");
		};
	},
});
