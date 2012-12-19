Ext.define("Project.controller.widget.NextBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			NextBtn : "NextBtn",
		},
		control : {
			NextBtn : {
				tap : "onNextBtnTap",
			},
		},
	},
	onNextBtnTap : function () {
		activatedStore.nextPage({
			callback: function(records, operation, success) {
				if (records.length == 0 || !success) {
					activatedStore.previousPage();
				};
			},
		});
	},
});
