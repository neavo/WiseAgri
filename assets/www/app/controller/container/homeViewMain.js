Ext.define("Project.controller.container.homeViewMain", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			homeViewCarousel : "#homeViewCarousel",
			homeViewPageNum : "#homeViewPageNum",
		},
		control : {
			homeViewCarousel : {
				activeitemchange : "OnHomeViewCarouselActiveItemChange",
			},
		},
	},
	setGrid : function (category, carousel) {
		var i = 0, j = 0, k = 0;
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
					var item = Ext.create("Ext.Container", {
							data : category[k],
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
							html : "<img class = homeViewIcon src = " + category[k]["iconUrl"] + " />",
						});
					if (category[k]["type"] == "app") {
						item.addListener({
							tap : {
								fn : function () {
									this.setAppCategory(this.config.data.id, this.config.data.name);
								},
								element : "element",
							},
						});
					};
					if (category[k]["type"] == "category") {
						item.addListener({
							tap : {
								fn : function () {
									if (this.config.data.style == "parentCategory") {
										this.setCategoryList(this.config.data.id, this.config.data.name);
									};
									if (this.config.data.style == "newsCategory") {
										this.setNewsCategory(this.config.data.id, this.config.data.name);
									};
								},
								element : "element",
							},
						});
					};
					hContainer.add(item);
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
	launch : function () {
		var self = this;
		var handle = setInterval(function () {
				if (defaultAppLoaded && defaultCategoryLoaded && myOrderLoaded) {
					for (var key in defaultApp) {
						defaultCategory.push(defaultApp[key]);
					};
					for (var key in myOrder) {
						defaultCategory.push(myOrder[key]);
					};
					self.setGrid(defaultCategory, DB.homeViewCarousel);
					clearInterval(handle);
				};
			}, 50);
	},
	OnHomeViewCarouselActiveItemChange : function (carousel, value, oldValue, eOpts) {
		this.getHomeViewPageNum().setHtml("<img class = rightContainerIcon src = resources/icons/pageNum_" + (carousel.getActiveIndex() + 1) + ".png />");
	},
});
