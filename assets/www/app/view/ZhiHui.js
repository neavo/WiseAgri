Ext.define("Project.view.ZhiHui", {
	extend : "Ext.Container",
	xtype : "ZhiHui",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "ZhiHuiTop",
			}, {
				xtype : "ZhiHuiMain",
			}, {
				xtype : "ZhiHuiBottom",
			}, 
		],
	},
});
