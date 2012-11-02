Ext.define("Project.view.infoDetail", {
	extend : "Ext.Container",
	xtype : "infoDetail",
	config : {
		layout : "vbox",
		cls : "mainContainer",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "infoDetailTop",
			}, {
				xtype : "infoDetailMain",
			}, {
				xtype : "infoDetailBottom",
			}, ],
	},
});
