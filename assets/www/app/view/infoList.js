Ext.define("Project.view.infoList", {
	extend : "Ext.Container",
	xtype : "infoList",
	config : {
		layout : "vbox",
		cls : "mainContainer",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "infoListTop",
			}, {
				xtype : "infoListMain",
			}, {
				xtype : "infoListBottom",
			}, ],
	},
});
