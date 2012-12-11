Ext.define("Project.view.container.SnBListMain", {
	extend : "Ext.List",
	xtype : "SnBListMain",
	config : {
		store : "SnBStore",
		emptyText : "没有更多信息 ...",
		loadingText : "正在获取信息...",
		itemTpl : "<img class = SnBListIcon onerror = \" this.src = 'resources/icons/defaultIcon.png' \" src = {SnBImage} />"
		 + "<div class = SnBListTitle><b>[{SnBType}] {SnBTitle}</b></div>"
		 + "<div class = SnBListTimePubliser>时间：{SnBTime}</div>"
		 + "<div class = SnBListTimePubliser>联系人：{SnBPublisher}</div>",
	},
});
