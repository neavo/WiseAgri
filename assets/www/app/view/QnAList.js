Ext.define("Project.view.QnAList", {
	extend : "Ext.Container",
	xtype : "QnAList",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				id : "QnAListTop",
				xtype : "toolbar",
				docked : "top",
				baseCls : "TopBar",
			}, {
				id : "QnAListMain",
				xtype : "list",
				store : "QnAStore",
				emptyText : "没有更多信息 ...",
				loadingText : "正在获取信息...",
				itemTpl : "<img class = QnAListIcon onerror = \" this.src = 'resources/icons/defaultIcon.png' \" src = {QImage} />"
				 + "<div class = QnAListTitle><b>[{QnAType}] {QContent}</b></div>"
				 + "<div class = QnAListTimePubliser>时间：{QTime}</div>"
				 + "<div class = QnAListTimePubliser>联系人：{QPublisher}</div>",
			}, {
				id : "QnAListBottom",
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
						xtype : "NextBtn",
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
