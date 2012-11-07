Ext.define("Project.view.container.switchAppMain", {
	extend : "Ext.List",
	xtype : "switchAppMain",
	config : {
		cls : "appList",
		store : "appListStore",
		onItemDisclosure : true,
		ui : "round",
		itemTpl : "<img class = appListIcon onerror = \" this.src = 'resources/icons/defaultIcon.png' \" src = {appIconUrl} >"
		 + "<div class = appListName><b>{appLocation} • {appName}</b></div>",
	},
});
