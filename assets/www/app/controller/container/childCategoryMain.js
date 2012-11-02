Ext.define("Project.controller.container.childCategoryMain", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			childCategoryMain : "childCategoryMain",
		},
		control : {
			childCategoryMain : {
				itemtap : "OnChildCategoryMainTap",
			},
		},
	},
	goBack : function () {
		DoSwitch("home");
	},
	setChildView : function (childCategory, title) {
		DB.infoListTop.setTitle(title);
		DB.childCategoryMain.getStore().setData(childCategory);
	},
	setActivatedView : function (id, title) {
		DoSwitch("infoList");
		setActivatedCategory(id);
		DB.infoListTop.setTitle(title);
		DB.infoListMain.getStore().setProxy({
			type : "jsonp",
			url : Website.serverUrl + "Pull/getNews.jsp?categoryid=" + DB.activatedCategory,
		});
		DB.infoListMain.getStore().loadPage(1);
	},
	setCustomView : function (html, title) {
		DoSwitch("customHtml");
		DB.customHtmlTop.setTitle(title);
		DB.customHtmlMain.setHtml(html);
	},
	setPublishView : function (id, title) {
		DoSwitch("publishView");
		DB.publishTop.setTitle(title);
		setActivatedCategory(id);
		DB.categoryIdTextFiled.setValue(DB.activatedCategory);
		DB.publishIdTextFiled.setValue(Math.round(new Date().getTime() / 1000));
	},
	setExpertView : function (id, title) {
		DoSwitch("expertView");
		DB.expertMain.getStore().loadPage(1);
	},
	OnChildCategoryMainTap : function (list, index, target, record, e, eOpts) {
		var data = record.getData();
		if (data.categoryStyle == "parentCategory") {
			this.setChildView(data.childCategory, data.categoryTitle);
		} else if (data.categoryStyle == "customHtml") {
			this.setCustomView(data.customHtml, data.categoryTitle);
		} else if (data.categoryStyle == "publishView") {
			this.setPublishView(data.categoryId, data.categoryTitle);
		} else if (data.categoryStyle == "expertView") {
			this.setExpertView(data.categoryId);
		} else if (data.categoryStyle == "webUrl") {
			window.open(data.webUrl, "_blank");
		} else {
			this.setActivatedView(data.categoryId, data.categoryTitle);
		};
	},
});
