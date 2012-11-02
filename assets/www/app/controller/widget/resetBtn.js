Ext.define("Project.controller.widget.resetBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			resetBtn : "resetBtn",
			titleTextFiled : "#titleTextFiled",
			publisherTextFiled : "#publisherTextFiled",
			contactTextFiled : "#contactTextFiled",
			contentTextFiled : "#contentTextFiled",
			publishIdTextFiled : "#publishIdTextFiled",
		},
		control : {
			resetBtn : {
				tap : "onResetBtnTap",
			},
		},
	},
	launch : function () {
		DB.titleTextFiled = this.getTitleTextFiled();
		DB.publisherTextFiled = this.getPublisherTextFiled();
		DB.contactTextFiled = this.getContactTextFiled();
		DB.contentTextFiled = this.getContentTextFiled();
		DB.publishIdTextFiled = this.getPublishIdTextFiled();
	},
	onResetBtnTap : function () {
		Ext.Msg.alert(DB.versionInfo, "表单已重置！");
		DB.titleTextFiled.setValue("");
		DB.publisherTextFiled.setValue("");
		DB.contactTextFiled.setValue("");
		DB.contentTextFiled.setValue("");
		DB.publishIdTextFiled.setValue("");
		DB.categoryIdTextFiled.setValue("");
		document.getElementById("publishImage").src = "resources/icons/defaultImage.png";
		document.getElementById("imageStatus").innerHTML = "点击添加";
	},
});
