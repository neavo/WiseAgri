Ext.define("Project.view.container.FeedBackMain", {
	extend : "Ext.List",
	xtype : "FeedBackMain",
	config : {
		store : "FeedBackStore",
		emptyText : "没有更多信息 ...",
		loadingText : "正在获取信息...",
		disableSelection : true,
		itemTpl : "<div style = \"background : #FFFFFF; -webkit-border-radius : 0.5em; padding : 0.25em;\">"
		 + "<div class = FeedBackTitle><b>{QTime} 建议：</b></div>"
		 + "<div class = FeedBackContent>{QContent}</div>"
		 + "</div>"
		 + "<div style = \" height : 0.5em \" ></div>"
		 + "<div style = \"background : #CEEA99; -webkit-border-radius : 0.5em; padding : 0.25em;\">"
		 + "<div class = FeedBackTitle><b>{ATime} 答复：</b></div>"
		 + "<div class = FeedBackContent>{AContent}</div>"
		 + "</div>",
	},
});
