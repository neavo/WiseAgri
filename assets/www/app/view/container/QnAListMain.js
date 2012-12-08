Ext.define("Project.view.container.QnAListMain", {
	extend : "Ext.List",
	xtype : "QnAListMain",
	config : {
		store : "QnAStore",
		emptyText : "没有更多信息 ...",
		loadingText : "正在获取信息...",
		itemTpl : "<img class = QnAListIcon onerror = \" this.src = 'resources/icons/defaultIcon.png' \" src = {QImage} />"
		 + "<div class = QnAListTitle><b>[{QnAType}] {QContent}</b></div>"
		 + "<div class = QnAListTimePubliser>时间：{QTime}</div>"
		 + "<div class = QnAListTimePubliser>联系人：{QPublisher}</div>",
		plugins : [{
				xclass : "Ext.plugin.ListPaging",
				loadMoreText : "<div style = \"font-size : 0.8em; text-align : center; color : #808080; padding-top : 0.3em;\" >下滑获取更多 ...</div>",
				autoPaging : true,
			},
		],
	},
});
