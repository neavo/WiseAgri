Ext.define("Project.controller.widget.categorySettingBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			categorySettingBtn : "categorySettingBtn",
		},
		control : {},
	},
	launch : function () {
		this.getCategorySettingBtn().addListener({
			tap : {
				fn : function () {
					Ext.getStore("appListStore").load();
					DoSwitch("appList");
				},
				element : "element",
			},
		});
	},
});
