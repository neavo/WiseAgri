Ext.define("Project.view.albumView", {
	extend : "Ext.Container",
	xtype : "albumView",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "albumViewTop",
			}, {
				xtype : "albumViewMain",
			}, {
				xtype : "albumViewBottom",
			}, 
		],
	},
});
