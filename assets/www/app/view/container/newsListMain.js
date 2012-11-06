Ext.define("Project.view.container.newsListMain", {
	extend : "Ext.List",
	xtype : "newsListMain",
	config : {
		store : "newsStore",
		cls : "newsList",
		itemTpl : "<img class = newsListIcon onerror = \" this.src = 'resources/icons/defaultIcon.png' \" src = {iconUrl} >"
		 + "<div class = newsListTitle><b>{title}</b></div>"
		 + "<div class = newsListDate>{dateTime}</div>"
		 + "<div class = newsListPubliser>{publisher}</div>",
	},
});
