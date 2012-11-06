Ext.define("Project.view.container.appListMain", {
	extend : "Ext.List",
	xtype : "appListMain",
	config : {
		cls : "appList",
		store : "appListStore",
		onItemDisclosure : true,
		ui : "round",
		itemTpl : "<img class = appListIcon onerror = \" this.src = 'resources/icons/defaultIcon.png' \" src = {appIconUrl} >"
		 + "<div class = appListName><b>{appLocation} • {appName}</b></div>",
	},
});
