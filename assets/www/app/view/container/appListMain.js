Ext.define("Project.view.container.appListMain", {
	extend : "Ext.List",
	xtype : "appListMain",
	config : {
		cls : "BackGround",
		store : "appListStore",
		itemTpl : "<img class = appListIcon onerror = \" this.src = 'resources/icons/defaultIcon.png' \" src = {appIconUrl} >"
		 + "<img class = appListCheck src = {checkIcon} />"
		 + "<div class = appListName><b>{appLocation} • {appName}</b></div>",
	},
});
