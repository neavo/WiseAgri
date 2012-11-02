Ext.define("Project.controller.widget.addBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			addBtn : "addBtn",
			titleTextFiled : "#titleTextFiled",
			publisherTextFiled : "#publisherTextFiled",
			contactTextFiled : "#contactTextFiled",
			contentTextFiled : "#contentTextFiled",
			publishIdTextFiled : "#publishIdTextFiled",
			categoryIdTextFiled : "#categoryIdTextFiled",
		},
		control : {
			addBtn : {
				tap : "onAddBtnTap",
			},
		},
	},
	launch : function () {
		DB.titleTextFiled = this.getTitleTextFiled();
		DB.publisherTextFiled = this.getPublisherTextFiled();
		DB.contactTextFiled = this.getContactTextFiled();
		DB.contentTextFiled = this.getContentTextFiled();
		DB.publishIdTextFiled = this.getPublishIdTextFiled();
		DB.categoryIdTextFiled = this.getCategoryIdTextFiled();
	},
	onAddBtnTap : function () {
		if (DB.titleTextFiled.getValue() == "" || DB.titleTextFiled.getValue().toLowerCase() == "null") {
			Ext.Msg.alert(DB.versionInfo, "必须输入标题！");
			return;
		} else if (DB.publisherTextFiled.getValue() == "" || DB.publisherTextFiled.getValue().toLowerCase() == "null") {
			Ext.Msg.alert(DB.versionInfo, "必须输入发布人！");
			return;
		} else if (DB.contactTextFiled.getValue() == "" || DB.contactTextFiled.getValue().toLowerCase() == "null") {
			Ext.Msg.alert(DB.versionInfo, "必须输入联系方式！");
			return;
		} else if (DB.contentTextFiled.getValue() == "" || DB.contentTextFiled.getValue().toLowerCase() == "null") {
			Ext.Msg.alert(DB.versionInfo, "必须输入详细内容！");
			return;
		} else if (document.getElementById("publishImage").src != "file:///android_asset/www/resources/icons/defaultImage.png" && document.getElementById("imageStatus").innerHTML == "上传中 ...") {
			Ext.Msg.alert(DB.versionInfo, "请等待图片上传完毕！");
			return;
		} else {
			DB.contentTextFiled.setValue(DB.contentTextFiled.getValue().replace(/\n/g, "</br>"));
			DB.contentTextFiled.setValue("联系方式：" + DB.contactTextFiled.getValue() + "<br/>"
				 + "详细内容：" + DB.contentTextFiled.getValue());
			if (document.getElementById("publishImage").src != "file:///android_asset/www/resources/icons/defaultImage.png" && document.getElementById("imageStatus").innerHTML == "上传成功！") {
				DB.contentTextFiled.setValue(DB.contentTextFiled.getValue() + "</br></br>"
					 + "<img style = \" max-width : 300px; max-height : 300px; display : block; margin : auto; \" src = " + Website.serverUrl + "upload/image/QA/" + DB.publishIdTextFiled.getValue() + "/1 />");
			};
			DB.publishMain.setUrl(Website.serverUrl + "Push/doPublish.jsp");
			DB.publishMain.submit({
				waitMsg : {
					message : "信息发布中..."
				},
				success : function () {
					Ext.Msg.alert(DB.versionInfo, "发布成功！");
					DB.titleTextFiled.setValue("");
					DB.publisherTextFiled.setValue("");
					DB.contactTextFiled.setValue("");
					DB.contentTextFiled.setValue("");
					DB.publishIdTextFiled.setValue("");
					DB.categoryIdTextFiled.setValue("");
					document.getElementById("publishImage").src = "resources/icons/defaultImage.png";
					document.getElementById("imageStatus").innerHTML = "点击添加";
					return;
				},
				failure : function () {
					Ext.Msg.alert(DB.versionInfo, "发布失败！");
					DB.titleTextFiled.setValue("");
					DB.publisherTextFiled.setValue("");
					DB.contactTextFiled.setValue("");
					DB.contentTextFiled.setValue("");
					DB.publishIdTextFiled.setValue("");
					DB.categoryIdTextFiled.setValue("");
					document.getElementById("publishImage").src = "resources/icons/defaultImage.png";
					document.getElementById("imageStatus").innerHTML = "点击添加";
					return;
				},
			});
		};
	},
});
