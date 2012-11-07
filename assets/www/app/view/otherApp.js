Ext.define("Project.view.otherApp", {
	extend : "Ext.Container",
	xtype : "otherApp",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "otherAppTop",
			}, {
				xtype : "otherAppMain",
			}, {
				xtype : "otherAppBottom",
			}, 
		],
	},
});
