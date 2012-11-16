Ext.define("Project.view.container.newsListMain", {
	extend : "Ext.List",
	xtype : "newsListMain",
	config : {
		store : "newsStore",
		itemTpl : "<img class = newsListIcon onerror = \" this.src = 'resources/icons/defaultIcon.png' \" src = {iconUrl} />"
		 + "<div class = newsListTitle><b>{newsTitle}</b></div>"
		 + "<div class = newsListDatePubliser>{dateTime}　来源：{newsPublisher}</div>",
	},
});
