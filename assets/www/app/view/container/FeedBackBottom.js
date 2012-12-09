Ext.define("Project.view.container.FeedBackBottom", {
	extend : "Ext.Toolbar",
	xtype : "FeedBackBottom",
	config : {
		docked : "bottom",
		baseCls : "BottomBar",
		items : [{
				xtype : "textfield",
				label : "建议",
				labelWidth : "3em",
				style : " border-right : 1px solid #808080;",
				width : "85%",
			}, {
				xtype : "button",
				ui : "plain",
				iconMask : true,
				style : "color : #FFFFFF; font-size : 0.8em; text-align : center;",
				text : "提交",
				width : "15%",
			},
		],
	},
});
