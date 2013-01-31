Ext.define("Project.view.newsList", {
	extend : "Ext.Container",
	xtype : "newsList",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				id : "newsListTop",
				xtype : "toolbar",
				docked : "top",
				baseCls : "TopBar",
			}, {
				id : "newsListMain",
				xtype : "list",
				store : "newsStore",
				emptyText : "没有更多信息 ...",
				loadingText : "正在获取信息...",
				itemTpl : "<img class = newsListIcon onerror = \" this.src = 'resources/icons/defaultIcon.png' \" src = {iconUrl} />"
				 + "<div class = newsListTitle><b>{newsTitle}</b></div>"
				 + "<div class = newsListDatePubliser>时间：{dateTime}</div>"
				 + "<div class = newsListDatePubliser>来源：{newsPublisher}</div>",
			}, {
				id : "newsListBottom",
				xtype : "toolbar",
				docked : "bottom",
				baseCls : "BottomBar",
				items : [{
						xtype : "spacer",
					}, {
						xtype : "PrevBtn",
					}, {
						xtype : "spacer",
					}, {
						id : "SwitchBtn",
						xtype : "SwitchBtn",
					}, {
						xtype : "spacer",
					}, {
						xtype : "NextBtn",
					}, {
						xtype : "spacer",
					},
				],
			},
		],
	},
});
