Ext.define("Project.view.container.infoListMain", {
	extend : "Ext.List",
	xtype : "infoListMain",
	config : {
		cls : "infoList",
		store : "mainStore",
		emptyText : "无更多记录",
		loadingText : "读取中 ...",
		itemTpl : "<img class = infoListImage onerror = \" this.src = 'resources/icons/icon.png' \" src = {imageurl1} >"
		 + "<div class = infoListTitle><b>{title}</b></div>"
		 + "<div class = infoListData>{datetime}</div>"
		 + "<div class = infoListPubliser>{publisher}</div>",
		plugins : [{
				xclass : "Ext.plugin.ListPaging",
				loadMoreText : "下滑获取更多 ...",
				autoPaging : true,
			}, 
		],
	},
});
