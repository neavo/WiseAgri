Ext.define("Project.view.container.DoQnAMain", {
	extend : "Ext.form.Panel",
	xtype : "DoQnAMain",
	config : {
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
	},
});
