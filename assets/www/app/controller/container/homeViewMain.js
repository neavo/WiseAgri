Ext.define("Project.controller.container.homeViewMain", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	setGrid : function (category, carousel) {
		var i = 0;
		var j = 0;
		var k = 0;
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
								html : "<img class = categoryIcon src = " + category[k]["categoryIconUrl"] + " >"
								 + "<div class = categoryName > " + category[k]["categoryName"] + "</div>",
							}));
					};
					if (category[k]["appName"]) {
						hContainer.add(Ext.create("Ext.Container", {
								html : "<img class = categoryIcon src = " + category[k]["appIconUrl"] + " >"
								 + "<div class = categoryName > " + category[k]["appName"] + "</div>",
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
	launch : function () {
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
					self.setGrid(DB.myApp, DB.homeViewMain);
				}, errorSQL);
			}, errorSQL);
		};
	},
});
