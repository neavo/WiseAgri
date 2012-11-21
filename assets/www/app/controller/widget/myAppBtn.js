Ext.define("Project.controller.widget.myAppBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			myAppBtn : "myAppBtn",
			YiNongBtn : "YiNongBtn",
			ZhiHuiBtn : "ZhiHuiBtn",
		},
		control : {},
	},
	setOrderGrid : function (data, carousel) {
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
					defaults : {},
				});
			for (j = 0; j < 3; j++) {
				hContainer.add(Ext.create("Ext.Spacer"));
				if (data[k]) {
					if (data[k]["appName"]) {
						var isOrdered = false;
						for (var key in myApp) {
							if (data[k]["appId"] == myApp[key]["appId"]) {
								isOrdered = true;
							};
						};
						var iconContainer = Ext.create("Ext.Container", {
								data : data[k],
								isOrdered : isOrdered,
								cls : "orderViewIconContainer",
								DoOrder : function (container, data, isOrdered) {
									if (isOrdered) {
										Ext.Msg.confirm(DB.versionInfo, "是否取消订阅“" + data.appLocation + "  • " + data.appName + "”？", function (buttonId, value, opt) {
											if (buttonId == "yes") {
												DoSQL("DELETE FROM myApp WHERE appId = \"" + data.appId + "\"");
												container.setHtml("<img class = orderViewIcon src = " + data.appIconUrl + " />");
											};
										});
										return false;
									} else {
										Ext.Msg.confirm(DB.versionInfo, "是否要订阅“" + data.appLocation + "  • " + data.appName + "”？", function (buttonId, value, opt) {
											if (buttonId == "yes") {
												DoSQL("INSERT INTO myApp"
													 + " (appId, appLocation, appName, appIconUrl)"
													 + " VALUES"
													 + " (\"" + data.appId + "\" ,\"" + data.appLocation + "\" ,\"" + data.appName + "\", \"" + data.appIconUrl + "\")");
												container.setHtml("<img class = orderViewIcon src = " + data.appIconUrl + " />"
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
							iconContainer.setHtml("<img class = orderViewIcon src = " + iconContainer.config.data.appIconUrl + " />"
								 + "<img class = orderViewIconOverlay src = resources/icons/Checked.png >");
						} else {
							iconContainer.setHtml("<img class = orderViewIcon src = " + iconContainer.config.data.appIconUrl + " />");
						};
						hContainer.add(iconContainer);
					};
					if (data[k]["categoryName"]) {
						var isOrdered = false;
						for (var key in myCategory) {
							if (data[k]["categoryId"] == myCategory[key]["categoryId"]) {
								isOrdered = true;
							};
						};
						var iconContainer = Ext.create("Ext.Container", {
								data : data[k],
								isOrdered : isOrdered,
								cls : "orderViewIconContainer",
								DoOrder : function (container, data, isOrdered) {
									if (isOrdered) {
										Ext.Msg.confirm(DB.versionInfo, "是否取消订阅“" + "翼农" + " • " + data.categoryName + "”？", function (buttonId, value, opt) {
											if (buttonId == "yes") {
												DoSQL("DELETE FROM myCategory WHERE categoryId = \"" + data.categoryId + "\"");
												container.setHtml("<img class = orderViewIcon src = " + data.categoryIconUrl + " />");
											};
										});
										return false;
									} else {
										Ext.Msg.confirm(DB.versionInfo, "是否要订阅“" + "翼农" + " • " + data.categoryName + "”？", function (buttonId, value, opt) {
											if (buttonId == "yes") {
												DoSQL("INSERT INTO myCategory"
													 + " (categoryId, categoryStyle, categoryName, categoryIconUrl)"
													 + " VALUES"
													 + " (\"" + data.categoryId + "\" ,\"" + "newsCategory" + "\" ,\"" + data.categoryName + "\", \"" + data.categoryIconUrl + "\")");
												container.setHtml("<img class = orderViewIcon src = " + data.categoryIconUrl + " />"
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
							iconContainer.setHtml("<img class = orderViewIcon src = " + iconContainer.config.data.categoryIconUrl + " />"
								 + "<img class = orderViewIconOverlay src = resources/icons/Checked.png >");
						} else {
							iconContainer.setHtml("<img class = orderViewIcon src = " + iconContainer.config.data.categoryIconUrl + " />");
						};
						hContainer.add(iconContainer);
					};
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
			this.setGrid(data.slice(k), carousel);
		};
	},
	launch : function () {
		var self = this;
		var YiNongBtn = this.getYiNongBtn();
		var ZhiHuiBtn = this.getZhiHuiBtn();
		this.getMyAppBtn().addListener({
			tap : {
				fn : function () {
					DoSwitch("orderView");
					YiNongBtn.setStyle("background : #FFFFFF; color : #2BA4E6; -webkit-border-radius : 1em; padding-top : 0.2em; padding-bottom : 0.2em;");
					ZhiHuiBtn.setStyle("background : #2BA4E6; color : #FFFFFF;");
					DB.orderViewMain.removeAll(true);
					Ext.getStore("YiNongStore").load({
						callback : function (records, operation, success) {
							if (success && records.length != 0) {
								var data = [];
								for (var key in records) {
									data.push(records[key].getData());
								};
								self.setOrderGrid(data, DB.orderViewMain);
								DB.orderViewMain.setActiveItem(0);
							};
						},
						scope : this,
					});
				},
				element : "element",
			},
		});
	},
});
