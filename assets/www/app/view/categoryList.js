Ext.define("Project.view.categoryList", {
	extend : "Ext.Container",
	xtype : "categoryList",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				id : "categoryListTop",
				xtype : "toolbar",
				docked : "top",
				baseCls : "TopBar",
			}, {
				id : "categoryListMain",
				xtype : "list",
				store : "categoryListStore",
				emptyText : "没有更多信息 ...",
				loadingText : "正在获取信息...",
				itemTpl : "<img class = categoryListIcon src = {iconUrl} />"
				 + "<img class = categoryListDisclosure src = resources/icons/disclosureIcon.png />"
				 + "<div class = categoryListName><b>{name}</b></div>",
			}, {
				id : "categoryListBottom",
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
