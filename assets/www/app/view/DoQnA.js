Ext.define("Project.view.DoQnA", {
	extend : "Ext.Container",
	xtype : "DoQnA",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				id : "DoQnATop",
				xtype : "toolbar",
				docked : "top",
				baseCls : "TopBar",
			}, {
				id : "DoQnAMain",
				xtype : "formpanel",
				layout : "vbox",
				scrollable : false,
				url : ServerUrl + "ZhiHui/DoQnA.jsp",
				items : [{
						xtype : "selectfield",
						name : "QnAType",
						label : "问题类型",
						height : "2em",
						labelWidth : "5.5em",
						store : "QnATypeStore",
					}, {
						xtype : "selectfield",
						name : "QnAExpert",
						label : "回答专家",
						height : "2em",
						labelWidth : "5.5em",
						store : "QnAExpertStore",
					}, {
						xtype : "textfield",
						name : "QPublisher",
						height : "2em",
						label : "联系人",
						labelWidth : "5.5em",
						placeHolder : "该项为必填项",
					}, {
						xtype : "textfield",
						name : "QPhone",
						height : "2em",
						label : "电话号码",
						labelWidth : "5.5em",
						placeHolder : "该项为必填项",
					}, {
						xtype : "textareafield",
						name : "QContent",
						flex : 1,
						label : "详细内容",
						labelWidth : "5.5em",
						placeHolder : "该项为必填项"
					}, {
						xtype : "hiddenfield",
						name : "QTime",
					}, {
						id : "QCID",
						xtype : "hiddenfield",
						name : "QCID",
					},
				],
			}, {
				id : "DoQnABottom",
				xtype : "toolbar",
				docked : "bottom",
				baseCls : "BottomBar",
				items : [{
						xtype : "spacer",
					}, {
						xtype : "DoQnABtn",
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
