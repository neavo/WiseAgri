Ext.define("Project.view.container.publishMain", {
	extend : "Ext.form.Panel",
	xtype : "publishMain",
	config : {
		layout : "vbox",
		scrollable : false,
		items : [{
				id : "titleTextFiled",
				xtype : "textfield",
				name : "title",
				height : "2em",
				label : "标题",
				labelWidth : "5.5em",
				placeHolder : "该项为必填项",
				autoCapitalize : false,
			}, {
				id : "publisherTextFiled",
				xtype : "textfield",
				name : "publisher",
				height : "2em",
				label : "发布人",
				labelWidth : "5.5em",
				placeHolder : "该项为必填项",
			}, {
				id : "contactTextFiled",
				xtype : "textfield",
				name : "contact",
				height : "2em",
				label : "联系方式",
				labelWidth : "5.5em",
				placeHolder : "该项为必填项",
			}, {
				id : "contentTextFiled",
				xtype : "textareafield",
				name : "content",
				flex : 1,
				label : "详细内容",
				labelWidth : "5.5em",
				placeHolder : "该项为必填项"
			}, {
				xtype : "container",
				flex : 1,
				cls : "publishImageContainer",
				layout : "hbox",
				items : [{
						xtype : "spacer",
					}, {
						xtype : "container",
						html : "<img id = publishImage class = publishImage src = resources/icons/defaultImage.png>"
						 + "<div id = imageStatus class = publishImageStatus >点击添加</div>",
						listeners : {
							tap : {
								fn : function () {
									DoGetPhoto();
								},
								element : "element",
							},
						},
					}, {
						xtype : "spacer",
					}, ],
			}, {
				id : "publishIdTextFiled",
				xtype : "numberfield",
				hidden : true,
				name : "publishId",
			}, {
				id : "categoryIdTextFiled",
				xtype : "numberfield",
				hidden : true,
				name : "categoryId",
			}, ],
	},
});
