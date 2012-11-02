Ext.define("Project.view.mainContainer", {
	extend : "Ext.Container",
	xtype : "mainContainer",
	config : {
		layout : "card",
		items : [{
				xtype : "homeView",
			}, {
				xtype : "childCategory",
			}, {
				xtype : "infoList",
			}, {
				xtype : "infoDetail",
			}, {
				xtype : "customHtml",
			}, {
				xtype : "publishView",
			}, {
				xtype : "expertView",
			}, ],
	},
});
