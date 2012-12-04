Ext.define("Project.view.container.DoSnBMain", {
	extend : "Ext.form.Panel",
	xtype : "DoSnBMain",
	config : {
		layout : "vbox",
		scrollable : false,
		url : ServerUrl + "ZhiHui/DoSnB.jsp",
		items : [{
				xtype : "selectfield",
				name : "SnBFlag",
				label : "信息类型",
				height : "2em",
				labelWidth : "5.5em",
				options : [{
						text : "供应信息",
						value : 1,
					}, {
						text : "求购信息",
						value : 2,
					},
				],
			}, {
				xtype : "textfield",
				name : "SnBTitle",
				height : "2em",
				label : "标题",
				labelWidth : "5.5em",
				placeHolder : "该项为必填项",
			}, {
				xtype : "textfield",
				name : "SnBArea",
				height : "2em",
				label : "地区",
				labelWidth : "5.5em",
				placeHolder : "该项为必填项",
			}, {
				xtype : "textfield",
				name : "SnBPrice",
				height : "2em",
				label : "价格",
				labelWidth : "5.5em",
				placeHolder : "该项为必填项",
			}, {
				xtype : "textfield",
				name : "SnBPublisher",
				height : "2em",
				label : "联系人",
				labelWidth : "5.5em",
				placeHolder : "该项为必填项",
			}, {
				xtype : "textfield",
				name : "SnBPhone",
				height : "2em",
				label : "电话号码",
				labelWidth : "5.5em",
				placeHolder : "该项为必填项",
			}, {
				xtype : "textareafield",
				name : "SnBContent",
				flex : 1,
				label : "详细内容",
				labelWidth : "5.5em",
				placeHolder : "该项为必填项"
			}, {
				xtype : "hiddenfield",
				name : "SnBTime",
			}, {
				id : "SnBCID",
				xtype : "hiddenfield",
				name : "SnBCID",
			},
		],
	},
});
