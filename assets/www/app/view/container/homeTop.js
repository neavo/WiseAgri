Ext.define("Project.view.container.homeTop", {
	extend : "Ext.Toolbar",
	xtype : "homeTop",
	config : {
		docked : "top",
		title : defaultApp.appLocation + " • " + defaultApp.appName,
	},
});
