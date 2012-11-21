Ext.define("Project.controller.orderView", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	setCategoryList : function (id, name) {
		DoSwitch("categoryList");
		DB.categoryListTop.setTitle(name);
		DB.categoryListMain.getStore().setProxy({
			type : "jsonp",
			url : ServerUrl + "GetCategoryList.jsp?parentId=" + id,
		});
		DB.categoryListMain.getStore().load();
	},
	setNewsCategory : function (id, name) {
		DoSwitch("newsList");
		DB.newsListTop.setTitle(name);
		DB.newsListMain.getStore().setProxy({
			type : "jsonp",
			url : ServerUrl + "GetNewsList.jsp?categoryId=" + id,
		});
		DB.newsListMain.getStore().load();
	},
	setAppCategory : function (id, name) {
		DoSwitch("categoryList");
		DB.categoryListTop.setTitle(name);
		DB.categoryListMain.getStore().setProxy({
			type : "jsonp",
			url : ServerUrl + "GetCategoryList.jsp?appId=" + id,
		});
		DB.categoryListMain.getStore().load();
	},
	setGrid : function (category, carousel) {
		var i = 0;
		var j = 0;
		var k = 0;
		var self = this;
		var vContainer = "";
		var hContainer = "";
		for (i = 0; i < 4; i++) {
			if (i == 0 && j == 0) {
				vContainer = Ext.create("Ext.Container", {
						layout : "vbox",
					});
			};
			hContainer = Ext.create("Ext.Container", {
					layout : "hbox",
				});
			for (j = 0; j < 2; j++) {
				hContainer.add(Ext.create("Ext.Spacer"));
				if (category[k]) {
					if (category[k]["categoryName"]) {
						hContainer.add(Ext.create("Ext.Container", {
								data : category[k],
								html : "<img class = homeViewIcon src = " + category[k]["categoryIconUrl"] + " />",
								listeners : {
									tap : {
										fn : function () {
											if (this.config.data.categoryStyle == "parentCategory") {
												self.setCategoryList(this.config.data.categoryId, this.config.data.categoryName);
											};
											if (this.config.data.categoryStyle == "newsCategory") {
												self.setNewsCategory(this.config.data.categoryId, this.config.data.categoryName);
											};
										},
										element : "element",
									},
								},
							}));
					};
					if (category[k]["appName"]) {
						hContainer.add(Ext.create("Ext.Container", {
								data : category[k],
								html : "<img class = homeViewIcon src = " + category[k]["appIconUrl"] + " />",
								listeners : {
									tap : {
										fn : function () {
											self.setAppCategory(this.config.data.appId, this.config.data.appName);
										},
										element : "element",
									},
								},
							}));
					};
				} else {
					hContainer.add(Ext.create("Ext.Container", {
							html : "<img class = homeViewIcon src = resources/icons/noIcon.png >",
						}));
				};
				k = k + 1;
			};
			vContainer.add(Ext.create("Ext.Spacer"));
			vContainer.add(hContainer);
		};
		vContainer.add(Ext.create("Ext.Spacer"));
		carousel.add(vContainer);
		if (category[k] && carousel.getItems().length < 9) {
			this.setGrid(category.slice(k), carousel);
		};
	},
	goBack : function () {
		var self = this;
		loadDefaultCategory();
		loadMyApp();
		loadMyCategory();
		var handle = setInterval(function () {
				if (defaultCategoryLoaded && myAppLoaded && myCategoryLoaded) {
					for (var key in myApp) {
						defaultCategory.push(myApp[key]);
					};
					for (var key in myCategory) {
						defaultCategory.push(myCategory[key]);
					};
					DoSwitch("homeView");
					DB.homeViewCarousel.removeAll(true);
					self.setGrid(defaultCategory, DB.homeViewCarousel);
					DB.homeViewCarousel.setActiveItem(0);
					clearInterval(handle);
				};
			}, 50);
	},
});
