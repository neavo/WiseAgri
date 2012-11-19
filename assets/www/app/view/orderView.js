Ext.define("Project.view.orderView", {
	extend : "Ext.Container",
	xtype : "orderView",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "orderViewTop",
			}, {
				xtype : "orderViewMain",
			}, {
				xtype : "orderViewBottom",
			}, 
		],
	},
});
