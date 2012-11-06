Ext.define("Project.controller.container.homeViewMain", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	loadCategory : function (category, carousel) {
		var i = 0;
		var j = 0;
		var vContainer = "";
		var hContainer = "";
		for (var KEY in category) {
			if (category[KEY]["categoryLevel"] != "1") {
				continue;
			};
			if (i == 9) {
				i = 0;
			};
			if (i == 0) {
				vContainer = Ext.create("Ext.Container", {
						layout : "vbox",
					});
				vContainer.add(Ext.create("Ext.Spacer"));
				carousel.add(vContainer);
			};
			if (i == 0 || i == 3 || i == 6) {
				hContainer = Ext.create("Ext.Container", {
						layout : "hbox",
					});
				hContainer.add(Ext.create("Ext.Spacer"));
				vContainer.add(hContainer);
				vContainer.add(Ext.create("Ext.Spacer"));
			};
			
			hContainer.add(Ext.create("Ext.Container", {
					html : "<img class = categoryIcon src = " + category[KEY]["categoryIconUrl"] + " >"
					 + "<div class = categoryName ><b>" + category[KEY]["categoryName"] + "<b></div>",
					data : category[KEY],
					setChildView : function (childCategory, title) {
						DoSwitch("childCategory");
						DB.childCategoryTop.setTitle(title);
						DB.childCategoryMain.getStore().setData(childCategory);
					},
					setNewsView : function (title) {
						DoSwitch("newsList");
						DB.newsListTop.setTitle(title);
						DB.newsListMain.getStore().load();
					},
					listeners : {
						tap : {
							fn : function () {
								if (this.config.data.categoryStyle == "parentCategory") {
									var childCategory = [];
									for (var key in category) {
										var array = this.config.data.extraParam.split(";");
										for (var k in array) {
											if (category[key]["categoryId"] == array[k]) {
												childCategory.push(category[key]);
											};
										};
									};
									this.config.setChildView(childCategory, this.config.data.categoryName);
								};
								if (this.config.data.categoryStyle == "newsCategory") {
									this.config.setNewsView(this.config.data.categoryName);
								};
							},
							element : "element",
						},
					},
				}));
			hContainer.add(Ext.create("Ext.Spacer"));
			
			i = i + 1;
		};
		
		for (; i < 9; i++) {
			if (i == 0) {
				vContainer = Ext.create("Ext.Container", {
						layout : "vbox",
					});
				vContainer.add(Ext.create("Ext.Spacer"));
				carousel.add(vContainer);
			};
			if (i == 0 || i == 3 || i == 6) {
				hContainer = Ext.create("Ext.Container", {
						layout : "hbox",
					});
				hContainer.add(Ext.create("Ext.Spacer"));
				vContainer.add(hContainer);
				vContainer.add(Ext.create("Ext.Spacer"));
			};
			
			hContainer.add(Ext.create("Ext.Container", {
					html : "<img class = categoryIcon src = resources/icons/noIcon.png >"
					 + "<div class = categoryName ><b>　　　　<b></div>",
				}));
			hContainer.add(Ext.create("Ext.Spacer"));
		};
	},
	launch : function () {
		var self = this;
		Ext.getStore("defaultCategoryStore").load({
			callback : function (records, operation, success) {
				if (success && records.lenght != 0) {
					var defaultCategory = [];
					for (var key in records) {
						defaultCategory.push(records[key].getData());
					};
					this.loadCategory(defaultCategory, DB.homeViewMain);
				};
			},
			scope : this,
		});
		if (SQLite) {
			SQLite.transaction(function (shell) {
				shell.executeSql("SELECT * FROM customCategory ORDER BY categoryId", [], function (shell, results) {
					DB.customCategory = SqlToJson(results);
					self.loadCategory(DB.customCategory, DB.homeViewMain);
				}, errorSQL);
			}, errorSQL);
		};
	},
});
