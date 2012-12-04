Ext.define("Project.view.container.DoSnBMain", {
	extend : "Ext.form.Panel",
	xtype : "DoSnBMain",
	config : {
		layout : "vbox",
		scrollable : false,
		items : [{
				xtype : "selectfield",
				label : "信息类型",
				height : "2em",
				labelWidth : "5.5em",
				options : [{
						text : "供应信息",
					}, {
						text : "求购信息",
					},
				],
			}, {
				xtype : "textfield",
				height : "2em",
				label : "标题",
				labelWidth : "5.5em",
				placeHolder : "该项为必填项",
			}, {
				xtype : "textfield",
				height : "2em",
				label : "地区",
				labelWidth : "5.5em",
				placeHolder : "该项为必填项",
			}, {
				xtype : "textfield",
				height : "2em",
				label : "价格",
				labelWidth : "5.5em",
				placeHolder : "该项为必填项",
			}, {
				xtype : "textfield",
				height : "2em",
				label : "联系人",
				labelWidth : "5.5em",
				placeHolder : "该项为必填项",
			}, {
				xtype : "textfield",
				height : "2em",
				label : "电话号码",
				labelWidth : "5.5em",
				placeHolder : "该项为必填项",
			}, {
				xtype : "textareafield",
				flex : 1,
				label : "详细内容",
				labelWidth : "5.5em",
				placeHolder : "该项为必填项"
			},
		],
	},
});
