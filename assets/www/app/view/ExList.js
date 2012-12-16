Ext.define("Project.view.ExList", {
	extend : "Ext.Container",
	xtype : "ExList",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				id : "ExListTop",
				xtype : "toolbar",
				docked : "top",
				baseCls : "TopBar",
			}, {
				id : "ExListMain",
				xtype : "panel",
				store : "ExStore",
				emptyText : "没有更多信息 ...",
				loadingText : "正在获取信息...",
				disableSelection : true,
				itemTpl : "<img class = ExListIcon onerror = \" this.src = 'resources/icons/defaultIcon.png' \" src = {ExImage} />"
				 + "<div class = ExListNamePhone>姓名：{ExName}</div>"
				 + "<div class = ExListInfo>职称：{ExTitle}</div>"
				 + "<div class = ExListInfo>职务：{ExPosition}</div>"
				 + "<div class = ExListIDescription>简介：{ExConent}</div>"
				 + "<div class = ExListNamePhone>电话：<a href = \"tel:{ExPhone}\">{ExPhone}</a></div>",
			}, {
				id : "ExListBottom",
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
