Ext.define("Project.controller.widget.switchAppBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			switchAppBtn : "switchAppBtn",
		},
		control : {
			switchAppBtn : {
				tap : "onSwitchAppBtnTap",
			},
		},
	},
	onSwitchAppBtnTap : function () {
		Ext.getStore("appListStore").load();
		DoSwitch("switchApp");		
	},
});
