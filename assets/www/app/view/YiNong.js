Ext.define("Project.view.YiNong", {
	extend : "Ext.Container",
	xtype : "YiNong",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "YiNongTop",
			}, {
				xtype : "YiNongMain",
			}, {
				xtype : "YiNongBottom",
			}, 
		],
	},
});
