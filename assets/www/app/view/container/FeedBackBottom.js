Ext.define("Project.view.container.FeedBackBottom", {
	extend : "Ext.Toolbar",
	xtype : "FeedBackBottom",
	config : {
		docked : "bottom",
		baseCls : "BottomBar",
		items : [{
				id : "FeedBackForm",
				xtype : "formpanel",
				scrollable : false,
				width : "85%",
				style : " border-right : 1px solid #808080;",
				url : ServerUrl + "ZhiHui/DoFeedBack.jsp",
				items : [{
						xtype : "textfield",
						name : "QContent",
						label : "建议",
						labelWidth : "3em",
					}, {
						xtype : "hiddenfield",
						name : "QTime",
					}, {
						xtype : "hiddenfield",
						name : "appId",
					},
				],
			}, {
				xtype : "button",
				ui : "plain",
				iconMask : true,
				style : "color : #FFFFFF; font-size : 0.8em; text-align : center;",
				text : "提交",
				width : "15%",
				listeners : {
					tap : {
						fn : function () {
							var FeedBackForm = Ext.getCmp("FeedBackForm");
							var data = FeedBackForm.getValues();
							var flag = true;
							for (var key in data) {
								if (key == "QTime") {
									data[key] = DoTime();
								};
								if (key == "appId") {
									data[key] = defaultBase[0]["id"];
								};
								if (data[key] == "") {
									flag = false;
									DoAlert("请输入完整信息！");
								};
							};
							if (flag) {
								FeedBackForm.submit({
									params : data,
									waitMsg : {
										xtype : "loadmask",
										message : "信息发布中 ...",
									},
									success : function (form, result) {
										DoAlert("发布成功！");
										form.reset();
									},
									failure : function (form, result) {
										DoAlert("发布失败！");
										form.reset();
									},
								});
							};
						},
					},
				},
			},
		],
	},
});
