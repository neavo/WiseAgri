Ext.define("Project.controller.homeView", {
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
							width : Ext.Viewport.getWindowWidth() * 0.28,
							height : Ext.Viewport.getWindowWidth() * 0.28,
							html : "<img class = homeViewIcon src = " + data[k]["iconUrl"] + " />",
						});
					if (data[k]["type"] == "app") {
						item.addListener({
							tap : {
								fn : function () {
									DoNextSwitch("categoryList");
									Ext.getCmp("categoryListTop").setTitle(this.config.data.location + " • " + this.config.data.name);
									DoLoad(Ext.getCmp("categoryListMain").getStore(), "ZhiHui/GetCategoryList.jsp?appId=" + this.config.data.id);
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
										Ext.getCmp("categoryListTop").setTitle(this.config.data.name);
										DoLoad(Ext.getCmp("categoryListMain").getStore(), "ZhiHui/GetCategoryList.jsp?parentId=" + this.config.data.id);
									};
									if (this.config.data.style == "newsCategory") {
										DoNextSwitch("newsList");
										Ext.getCmp("newsListTop").setTitle(this.config.data.name);
										DoLoad(Ext.getCmp("newsListMain").getStore(), "ZhiHui/GetNewsList.jsp?categoryId=" + this.config.data.id);
									};
									if (this.config.data.style == "WebLink") {
										Ext.getStore("WebLinkStore").setProxy({
											type : "jsonp",
											url : ServerUrl + "ZhiHui/GetWebLink.jsp?categoryId=" + this.config.data.id,
										});
										Ext.getStore("WebLinkStore").load({
											callback : function (records, operation, success) {
												if (success && records.lenght != 0) {
													window.plugins.childBrowser.openExternal(records[0].getData().WebLink);
												};
											},
											scope : this,
										});
									};
								},
								element : "element",
							},
						});
					};
					hContainer.add(item);
				} else {
					hContainer.add(Ext.create("Ext.Container", {
							width : Ext.Viewport.getWindowWidth() * 0.28,
							height : Ext.Viewport.getWindowWidth() * 0.28,
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
	SetYiNongGrid : function (data, carousel) {
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
					var isOrdered = false;
					for (var key in myOrder) {
						if (data[k]["id"] == myOrder[key]["id"]) {
							isOrdered = true;
						};
					};
					var item = Ext.create("Ext.Container", {
							data : data[k],
							isOrdered : isOrdered,
							cls : "orderViewIconContainer",
							DoOrder : function (container, data, isOrdered) {
								if (isOrdered) {
									Ext.Msg.confirm("", "是否取消订阅“" + "翼农" + " • " + data.name + "”？", function (buttonId, value, opt) {
										if (buttonId == "yes") {
											DoSQL("DELETE FROM myOrder WHERE id = \"" + data.id + "\"");
											container.setHtml("<img class = orderViewIcon src = " + data.iconUrl + " />");
										};
									});
									return false;
								} else {
									Ext.Msg.confirm("", "是否要订阅“" + "翼农" + " • " + data.name + "”？", function (buttonId, value, opt) {
										if (buttonId == "yes") {
											DoSQL("INSERT INTO myOrder"
												 + " (type, id, name, iconUrl, style, location)"
												 + " VALUES"
												 + " (\"" + "YiNong" + "\"," + " \"" + data.id + "\"," + " \"" + data.name + "\","
												 + " \"" + data.iconUrl + "\"," + " \"" + data.style + "\"," + " \"" + data.location + "\")");
											container.setHtml("<img class = orderViewIcon src = " + data.iconUrl + " />"
												 + "<img class = orderViewIconOverlay src = resources/icons/Checked.png >");
										};
									});
									return true;
								};
							},
							listeners : {
								tap : {
									fn : function () {
										this.config.isOrdered = this.config.DoOrder(this, this.config.data, this.config.isOrdered);
									},
									element : "element",
								},
							},
						});
					if (isOrdered) {
						item.setHtml("<img class = orderViewIcon src = " + item.config.data.iconUrl + " />"
							 + "<img class = orderViewIconOverlay src = resources/icons/Checked.png >");
					};
					if (!isOrdered) {
						item.setHtml("<img class = orderViewIcon src = " + item.config.data.iconUrl + " />");
					};
					hContainer.add(item);
				} else {
					hContainer.add(Ext.create("Ext.Container", {
							html : "<img class = orderViewIcon src = resources/icons/noIcon.png >",
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
			this.setYiNongGrid(data.slice(k), carousel);
		};
	},
	launch : function () {
		History.push("homeView");
		
		Ext.getCmp("homeViewMain").addListener({
			painted : {
				fn : function (container, eOpts) {
					loadDefaultBase();
					loadDefaultApp();
					loadDefaultCategory();
					loadMyOrder();
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
								Ext.getCmp("homeViewTop").setTitle("<b>" + defaultBase[0]["location"] + " • " + defaultBase[0]["name"] + "</b>");
								Ext.getCmp("homeViewMain").removeAll(true);
								self.setGrid(defaultCategory, Ext.getCmp("homeViewMain"));
								Ext.getCmp("homeViewMain").setActiveItem(0);
								clearInterval(handle);
							};
						}, 50);
				},
				scope : this,
			},
		});
		
		Ext.getCmp("DoOrderBtn").addListener({
			tap : {
				fn : function () {
					DoNextSwitch("OrderView");
					Ext.getStore("YiNongStore").setProxy({
						type : "jsonp",
						url : ServerUrl + "YiNong/GetAppList.jsp",
					});
					Ext.getStore("YiNongStore").load({
						callback : function (records, operation, success) {
							if (success && records.lenght != 0) {
								var data = [];
								for (var key in records) {
									data.push(records[key].getData());
								};
								Ext.getCmp("OrderViewMain").removeAll(true);
								this.SetYiNongGrid(data, Ext.getCmp("OrderViewMain"));
								Ext.getCmp("OrderViewMain").setActiveItem(0);
							};
						},
						scope : this,
					});
				},
				element : "element",
				scope : this,
			},
		});
	},
});
