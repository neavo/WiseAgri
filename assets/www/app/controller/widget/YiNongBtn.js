Ext.define("Project.controller.widget.YiNongBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			YiNongBtn : "YiNongBtn",
			ZhiHuiBtn : "ZhiHuiBtn",
		},
		control : {},
	},
	setYiNongGrid : function (data, carousel) {
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
										Ext.Msg.confirm(VersionInfo, "是否取消订阅“" + "翼农" + " • " + data.categoryName + "”？", function (buttonId, value, opt) {
											if (buttonId == "yes") {
												DoSQL("DELETE FROM myCategory WHERE categoryId = \"" + data.categoryId + "\"");
												container.setHtml("<img class = orderViewIcon src = " + data.iconUrl + " />");
											};
										});
										return false;
									} else {
										Ext.Msg.confirm(VersionInfo, "是否要订阅“" + "翼农" + " • " + data.categoryName + "”？", function (buttonId, value, opt) {
											console.log(data.iconUrl);
											if (buttonId == "yes") {
												DoSQL("INSERT INTO myCategory"
													 + " (categoryId, categoryStyle, categoryName, categoryIconUrl)"
													 + " VALUES"
													 + " (\"" + data.categoryId + "\" ,\"" + "newsCategory" + "\" ,\"" + data.categoryName + "\", \"" + data.iconUrl + "\")");
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
							iconContainer.setHtml("<img class = orderViewIcon src = " + iconContainer.config.data.iconUrl + " />"
								 + "<img class = orderViewIconOverlay src = resources/icons/Checked.png >");
						} else {
							iconContainer.setHtml("<img class = orderViewIcon src = " + iconContainer.config.data.iconUrl + " />");
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
			this.setYiNongGrid(data.slice(k), carousel);
		};
	},
	launch : function () {
		var self = this;
		var YiNongBtn = this.getYiNongBtn();
		var ZhiHuiBtn = this.getZhiHuiBtn();
		YiNongBtn.addListener({
			tap : {
				fn : function () {
					if (this.getStyle() != "background : #FFFFFF; color : #2BA4E6; -webkit-border-radius : 1em; padding-top : 0.2em; padding-bottom : 0.2em;") {
						this.setStyle("background : #FFFFFF; color : #2BA4E6; -webkit-border-radius : 1em; padding-top : 0.2em; padding-bottom : 0.2em;");
						ZhiHuiBtn.setStyle("background : #2BA4E6; color : #FFFFFF;");
						DoSwitch("orderView");
						DB.orderViewMain.removeAll(true);
						DoWebService("GetAppList", {
							"page" : 1,
							"limit" : 9999,
							"keyWord" : null,
						}, function (response, eOpts) {
							var data = eval("(" + eval("(" + response.responseText + ")").d + ")");
							self.setYiNongGrid(data, DB.orderViewMain);
							DB.orderViewMain.setActiveItem(0);
						});
					};
				},
				element : "element",
			},
		});
	},
});
