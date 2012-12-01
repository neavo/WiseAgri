Ext.define("Project.view.container.categoryListMain", {
	extend : "Ext.List",
	xtype : "categoryListMain",
	config : {
		store : "categoryListStore",
		emptyText : "没有更多信息 ...",
		loadingText : "正在获取信息...",
		itemTpl : "<img class = categoryListIcon src = {iconUrl} />"
		 + "<img class = categoryListDisclosure src = resources/icons/disclosureIcon.png />"
		 + "<div class = categoryListName><b>{name}</b></div>",
	},
});
