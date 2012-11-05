Ext.define("Project.controller.appList", {
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
		for (var key in category) {
			if (category[key]["categoryLevel"] != "1") {
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
					html : "<img class = categoryIcon src = " + category[key]["categoryIconUrl"] + " >"
					 + "<div class = categoryName ><b>" + category[key]["categoryName"] + "<b></div>",
					data : category[key],
					setChildView : function (childCategory, title) {
						DoSwitch("childCategory");
						DB.childCategoryTop.setTitle(title);
						DB.childCategoryMain.getStore().setData(childCategory);
					},
					listeners : {
						tap : {
							fn : function () {
								if (this.config.data.categoryStyle == "parentCategory") {
									var childCategory = [];
									for (var k in category) {
										if (category[k]["categoryId"] == this.config.data.arg_1 || category[k]["categoryId"] == this.config.data.arg_2 || category[k]["categoryId"] == this.config.data.arg_3) {
											childCategory.push(category[k]);
										};
									};
									this.config.setChildView(childCategory, this.config.data.categoryTitle);
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
					 + "<div class = categoryTitle ><b>　　　　<b></div>",
				}));
			hContainer.add(Ext.create("Ext.Spacer"));
		};
	},
	goBack : function () {
		var self = this;
		DB.homeMain.removeAll(true);
		Ext.getStore("defaultCategory").load({
			callback : function (records, operation, success) {
				if (success && records.lenght != 0) {
					var defaultCategory = [];
					for (var key in records) {
						defaultCategory.push(records[key].getData());
					};
					this.loadCategory(defaultCategory, DB.homeMain);
				};
			},
			scope : this,
		});
		if (SQLite) {
			SQLite.transaction(function (shell) {
				shell.executeSql("SELECT * FROM customCategory ORDER BY categoryId", [], function (shell, results) {
					DB.customCategory = SqlToJson(results);
					self.loadCategory(DB.customCategory, DB.homeMain);
					DoSwitch("homeView");
					DB.homeMain.setActiveItem(0);
				}, errorSQL);
			}, errorSQL);
		};
	},
});
