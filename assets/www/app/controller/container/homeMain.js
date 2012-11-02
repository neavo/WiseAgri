Ext.define("Project.controller.container.homeMain", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			categoryContainer : "#categoryContainer",
			adCarousel : "#adCarousel",
		},
		control : {
			categoryContainer : {
				initialize : "onCategoryContainerInitialize",
			},
		},
	},
	launch : function () {
		var adCarousel = this.getAdCarousel();
		adCarousel.setHeight(Ext.Viewport.getWindowWidth() * 3 / 5);
		setTimeout(function () {
			Ext.getStore("adStore").load(function (records, operation, success) {
				if (success && records.length != 0) {
					for (var key in records) {
						adCarousel.add(Ext.create("Ext.Container", {
								html : "<img class = adImage src = " + Ext.getStore("adStore").getAt(key).get("adcontent") + ">",
							}));
					};
					adCarousel.setActiveItem(0);
					var t = 0;
					setInterval(function () {
						if (t == records.length - 1) {
							t = 0;
						} else {
							t = t + 1;
						}
						adCarousel.setActiveItem(t);
					}, 5000);
				} else {
					adCarousel.add(Ext.create("Ext.Container", {
							html : "<img class = adImage src = resources/images/defaultAd.jpg >",
						}));
				};
			}, this);
		}, 2000);
	},
	onCategoryContainerInitialize : function (container, eOpts) {
		var i = 1;
		var hContainer = Ext.create("Ext.Container", {
				layout : "hbox",
			});
		hContainer.add(Ext.create("Ext.Spacer"));
		container.add(Ext.create("Ext.Spacer"));
		container.add(hContainer);
		for (var key in Category) {
			if (i == 5) {
				hContainer = Ext.create("Ext.Container", {
						layout : "hbox",
					});
				hContainer.add(Ext.create("Ext.Spacer"));
				container.add(Ext.create("Ext.Spacer"));
				container.add(hContainer);
				i = 1;
			} else {
				i = i + 1;
			};
			var categoryItemContainer = Ext.create("Ext.Container", {
					html : "<img class = categoryIcon src = " + Category[key]["categoryIconUrl"] + " >"
					 + "<div class = categoryTitle ><b>" + Category[key]["categoryTitle"] + "<b></div>",
					categoryTitle : Category[key]["categoryTitle"],
					childCategory : Category[key]["childCategory"],
					setChildView : function (childCategory, title) {
						DoSwitch("childCategory");
						DB.childCategoryTop.setTitle(title);
						DB.childCategoryMain.getStore().setData(childCategory);
					},
					listeners : {
						tap : {
							fn : function () {
								this.config.setChildView(this.config.childCategory, this.config.categoryTitle);
							},
							element : "element",
						},
					},
				});
			hContainer.add(categoryItemContainer);
			hContainer.add(Ext.create("Ext.Spacer"));
		};
		container.add(Ext.create("Ext.Spacer"));
	},
});
