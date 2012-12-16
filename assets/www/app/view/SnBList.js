Ext.define("Project.view.SnBList", {
	extend : "Ext.Container",
	xtype : "SnBList",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				id : "SnBListTop",
				xtype : "toolbar",
				docked : "top",
				baseCls : "TopBar",
			}, {
				id : "SnBListMain",
				xtype : "list",
				store : "SnBStore",
				emptyText : "没有更多信息 ...",
				loadingText : "正在获取信息...",
				itemTpl : "<img class = SnBListIcon onerror = \" this.src = 'resources/icons/defaultIcon.png' \" src = {SnBImage} />"
				 + "<div class = SnBListTitle><b>[{SnBType}] {SnBTitle}</b></div>"
				 + "<div class = SnBListTimePubliser>时间：{SnBTime}</div>"
				 + "<div class = SnBListTimePubliser>联系人：{SnBPublisher}</div>",
			}, {
				id : "SnBListBottom",
				xtype : "toolbar",
				docked : "bottom",
				baseCls : "BottomBar",
				items : [{
						xtype : "spacer",
					}, {
						xtype : "homeBtn",
					}, {
						xtype : "spacer",
					}, {
						xtype : "backBtn",
					}, {
						xtype : "spacer",
					},
				],
			},
		],
	},
});
