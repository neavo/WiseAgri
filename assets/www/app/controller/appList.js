Ext.define("Project.controller.appList", {
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
				if (category[k]) {
					if (category[k]["categoryName"]) {
						hContainer.add(Ext.create("Ext.Container", {
								data : category[k],
								html : "<img class = categoryIcon src = " + category[k]["categoryIconUrl"] + " />"
								 + "<div class = categoryName ><b>" + category[k]["categoryName"] + "</b></div>",
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
								html : "<img class = categoryIcon src = " + category[k]["appIconUrl"] + " />"
								 + "<div class = categoryName ><b>" + category[k]["appName"] + "</b></div>",
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
							html : "<img class = categoryIcon src = resources/icons/noIcon.png >"
							 + "<div class = categoryName >　　　　</div>",
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
	goBack : function () {
		DB.homeViewMain.removeAll(true);
		Ext.getStore("defaultCategoryStore").load({
			callback : function (records, operation, success) {
				if (success && records.lenght != 0) {
					var defaultCategory = [];
					for (var key in records) {
						defaultCategory.push(records[key].getData());
					};
					this.setGrid(defaultCategory, DB.homeViewMain);
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
						self.setGrid(DB.myApp, DB.homeViewMain);
					};
					DoSwitch("homeView");
					DB.homeViewMain.setActiveItem(0);
				}, errorSQL);
			}, errorSQL);
		};
	},
});
