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
								width : Ext.Viewport.getWindowWidth() * 0.3,
								height : Ext.Viewport.getWindowWidth() * 0.3,
								html : "<img class = categoryIcon src = " + category[k]["categoryIconUrl"] + " />",
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
								width : Ext.Viewport.getWindowWidth() * 0.3,
								height : Ext.Viewport.getWindowWidth() * 0.3,
								html : "<img class = categoryIcon src = " + category[k]["appIconUrl"] + " />",
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
							width : Ext.Viewport.getWindowWidth() * 0.3,
							height : Ext.Viewport.getWindowWidth() * 0.3,
							html : "<img class = categoryIcon src = resources/icons/noIcon.png >",
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
		if (category[k]) {
			this.setGrid(category.slice(k), carousel);
		};
	},
	launch : function () {
		Ext.getStore("defaultCategoryStore").load({
			callback : function (records, operation, success) {
				if (success && records.lenght != 0) {
					var defaultCategory = [];
					for (var key in records) {
						defaultCategory.push(records[key].getData());
					};
					this.setGrid(defaultCategory, DB.homeViewCarousel);
				};
			},
			scope : this,
		});
		if (SQLite) {
			var self = this;
			SQLite.transaction(function (shell) {
				shell.executeSql("SELECT * FROM myApp ORDER BY appId", [], function (shell, results) {
					DB.myApp = SqlToJson(results);
					if (DB.myApp.length != 0) {
						self.setGrid(DB.myApp, DB.homeViewCarousel);
					};
				}, errorSQL);
			}, errorSQL);
		};
	},
	OnHomeViewCarouselActiveItemChange : function (carousel, value, oldValue, eOpts) {
		this.getHomeViewPageNum().setHtml("<img class = rightContainerIcon src = resources/icons/pageNum_" + (carousel.getActiveIndex()+1) + ".png />");
	},
});
