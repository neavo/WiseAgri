Ext.define("Project.controller.YiNong", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	setGrid : function (data, carousel) {
		var i = 0, j = 0, k = 0;
		var vContainer = "";
		var hContainer = "";
		for (i = 0; i < 3; i++) {
			if (i == 0 && j == 0) {
				vContainer = Ext.create("Ext.Container", {
						layout : "vbox",
					});
			};
			hContainer = Ext.create("Ext.Container", {
					layout : "hbox",
				});
			for (j = 0; j < 3; j++) {
				hContainer.add(Ext.create("Ext.Spacer"));
				if (data[k]) {
					var item = Ext.create("Ext.Container", {
							data : data[k],
							width : ScreenWidth * 0.28,
							height : ScreenWidth * 0.28,
							html : "<img class = homeViewIcon src = " + data[k]["iconUrl"] + " />",
						});
					if (data[k]["type"] == "app") {
						item.addListener({
							tap : {
								fn : function () {
									DoNextSwitch("categoryList");
									DB.categoryListTop.setTitle(this.config.data.location + " • " + this.config.data.name);
									DoLoad(DB.categoryListMain.getStore(), "ZhiHui/GetCategoryList.jsp?appId=" + this.config.data.id);
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
										DoNextSwitch("categoryList");
										DB.categoryListTop.setTitle(this.config.data.name);
										DoLoad(DB.categoryListMain.getStore(), "ZhiHui/GetCategoryList.jsp?parentId=" + this.config.data.id);
									};
									if (this.config.data.style == "newsCategory") {
										DoNextSwitch("newsList");
										DB.newsListTop.setTitle(this.config.data.name);
										DoLoad(DB.newsListMain.getStore(), "ZhiHui/GetNewsList.jsp?categoryId=" + this.config.data.id);
									};
								},
								element : "element",
							},
						});
					};
					hContainer.add(item);
				} else {
					hContainer.add(Ext.create("Ext.Container", {
							width : ScreenWidth * 0.28,
							height : ScreenWidth * 0.28,
							html : "<img class = homeViewIcon src = resources/icons/noIcon.png />",
						}));
				};
				k = k + 1;
			};
			hContainer.add(Ext.create("Ext.Spacer"));
			vContainer.add(Ext.create("Ext.Spacer"));
			vContainer.add(hContainer);
		};
		vContainer.add(Ext.create("Ext.Spacer"));
		carousel.add(vContainer);
		if (data[k] && carousel.getItems().length < 9) {
			this.setGrid(data.slice(k), carousel);
		};
	},
	loadAll : function () {
		loadDefaultApp();
		loadDefaultCategory();
		loadMyOrder();
	},
	goBack : function () {
		this.loadAll();
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
					DoNextSwitch("homeView");
					DB.homeViewMain.removeAll(true);
					self.setGrid(defaultCategory, DB.homeViewMain);
					DB.homeViewMain.setActiveItem(0);
					clearInterval(handle);
				};
			}, 50);
	},
});
