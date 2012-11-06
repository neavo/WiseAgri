Ext.define("Project.view.container.homeViewTop", {
	extend : "Ext.Toolbar",
	xtype : "homeViewTop",
	config : {
		docked : "top",
		title : defaultApp.appLocation + " • " + defaultApp.appName,
	},
});
