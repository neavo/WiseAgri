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
	setGrid : function (data, carousel) {
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
				if (data[k]) {
					var item = Ext.create("Ext.Container", {
							data : data[k],
							html : "<img class = homeViewIcon src = " + data[k]["iconUrl"] + " />",
						});
					if (data[k]["type"] == "app") {
						item.addListener({
							tap : {
								fn : function () {
									DoSwitch("categoryList");
									DB.categoryListTop.setTitle(this.config.data.location + " • " + this.config.data.name);
									DB.categoryListMain.getStore().setProxy({
										type : "jsonp",
										url : ServerUrl + "ZhiHui/GetCategoryList.jsp?appId=" + this.config.data.id,
									});
									DB.categoryListMain.getStore().load();
								},
								element : "element",
							},
						});
					};
					if (data[k]["type"] == "category") {
						item.addListener({
							tap : {
								fn : function () {
									if (this.config.data.style == "parentCategory") {
										DoSwitch("categoryList");
										DB.categoryListTop.setTitle(this.config.data.name);
										DB.categoryListMain.getStore().setProxy({
											type : "jsonp",
											url : ServerUrl + "ZhiHui/GetCategoryList.jsp?parentId=" + this.config.data.id,
										});
										DB.categoryListMain.getStore().load();
									};
									if (this.config.data.style == "newsCategory") {
										DoSwitch("newsList");
										DB.newsListTop.setTitle(this.config.data.name);
										DB.newsListMain.getStore().setProxy({
											type : "jsonp",
											url : ServerUrl + "ZhiHui/GetNewsList.jsp?categoryId=" + this.config.data.id,
										});
										DB.newsListMain.getStore().loadPage(1);
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
		if (data[k] && carousel.getItems().length < 9) {
			this.setGrid(data.slice(k), carousel);
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
						if (myOrder[key]["type"] == "app") {
							defaultCategory.push(myOrder[key]);
						};
					};
					for (var key in myOrder) {
						if (myOrder[key]["type"] == "YiNong") {
							defaultCategory.push(myOrder[key]);
						};
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
