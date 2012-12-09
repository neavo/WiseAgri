Ext.define("Project.controller.widget.FeedBackBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			FeedBackBtn : "FeedBackBtn",
		},
		control : {},
	},
	launch : function () {
		this.getFeedBackBtn().addListener({
			tap : {
				fn : function () {
					DoSwitch("FeedBack");
					DB.FeedBackTop.setTitle("意见反馈");
					DoLoad(DB.FeedBackMain.getStore(), "ZhiHui/GetQnAList.jsp?categoryId=208", true);
				},
				element : "element",
			},
		});
	},
});
