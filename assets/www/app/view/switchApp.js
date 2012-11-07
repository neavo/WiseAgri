Ext.define("Project.view.switchApp", {
	extend : "Ext.Container",
	xtype : "switchApp",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "switchAppTop",
			}, {
				xtype : "switchAppMain",
			}, {
				xtype : "switchAppBottom",
			}, 
		],
	},
});
