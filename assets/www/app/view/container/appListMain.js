Ext.define("Project.view.container.appListMain", {
	extend : "Ext.List",
	xtype : "appListMain",
	config : {
		cls : "BackGround",
		store : "localAppStore",
		itemTpl : "<img class = appListIcon src = {appIconUrl} />"
		 + "<img class = appListCheck src = {checkIcon} />"
		 + "<div class = appListName><b>{appLocation} • {appName}</b></div>",
	},
});
