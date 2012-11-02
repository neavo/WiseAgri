Ext.define("Project.view.container.expertMain", {
	extend : "Ext.List",
	xtype : "expertMain",
	config : {
		cls : "expertList",
		store : "expertStore",
		emptyText : "无更多记录",
		loadingText : "读取中 ...",
		disableSelection : true,
		itemTpl : "<img class = expertListImage src = {imageurl} >"
		 + "<div class = expertListTitle>姓名：{name}</div>"
		 + "<div class = expertListInfo>职称：{title}</div>"
		 + "<div class = expertListInfo>职务：{position}</div>"
		 + "<div class = expertListIDescription>简介：{description}</div>"
		 + "<div class = expertListInfo>电话：<a href = \"tel:{telephone}\">{telephone}</a></div>",
		plugins : [{
				xclass : "Ext.plugin.ListPaging",
				loadMoreText : "下滑获取更多 ...",
				autoPaging : true,
			}, 
		],
	},
});
