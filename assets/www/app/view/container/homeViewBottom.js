Ext.define("Project.view.container.homeViewBottom", {
	extend : "Ext.Toolbar",
	xtype : "homeViewBottom",
	config : {
		docked : "bottom",
		baseCls : "BottomBar",
		layout : "hbox",
		items : [{
				xtype : "spacer",
			}, {
				xtype : "container",
				html : "<div style = \"height : 8%; width : 33.33%; \"><img style = \"margin-top : 5%; height : 90%;\" src = \"resources/icons/AccountBtn.png\" /><div>",
				listeners : {
					tap : {
						fn : function () {
							DoAlert("功能开发中 ...");
						},
						element : "element",
					},
				},
			}, {
				xtype : "spacer",
			}, {
				xtype : "container",
				html : "<div style = \"height : 8%; width : 33.33%; \"><img style = \"margin-top : 5%; height : 90%;\" src = \"resources/icons/DoOrderBtn.png\" /><div>",
				setYiNongGrid : function (data, carousel) {
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
				setZhiHuiGrid : function (data, carousel) {
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
												Ext.Msg.confirm("", "是否取消订阅“" + data.location + " • " + data.name + "”？", function (buttonId, value, opt) {
													if (buttonId == "yes") {
														DoSQL("DELETE FROM myOrder WHERE id = \"" + data.id + "\"");
														container.setHtml("<img class = orderViewIcon src = " + data.iconUrl + " />");
													};
												});
												return false;
											} else {
												Ext.Msg.confirm("", "是否要订阅“" + data.location + " • " + data.name + "”？", function (buttonId, value, opt) {
													if (buttonId == "yes") {
														DoSQL("INSERT INTO myOrder"
															 + " (type, id, name, iconUrl, style, location)"
															 + " VALUES"
															 + " (\"" + "app" + "\"," + " \"" + data.id + "\"," + " \"" + data.name + "\","
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
						this.setZhiHuiGrid(data.slice(k), carousel);
					};
				},
				listeners : {
					tap : {
						fn : function () {
							// 载入翼农频道数据
							DoSwitch("YiNong");
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
										DB.YiNongMain.removeAll(true);
										this.config.setYiNongGrid(data, DB.YiNongMain);
										DB.YiNongMain.setActiveItem(0);
									};
								},
								scope : this,
							});
							// 载入智慧频道数据
							var url = ServerUrl + "ZhiHui/GetAppList.jsp?appId=";
							for (var key in defaultBase) {
								url = url + defaultBase[key]["id"] + ";";
							};
							for (var key in defaultApp) {
								url = url + defaultApp[key]["id"] + ";";
							};
							DB.ZhiHuiMain.removeAll(true);
							Ext.getStore("appListStore").setProxy({
								type : "jsonp",
								url : url,
							});
							Ext.getStore("appListStore").load({
								callback : function (records, operation, success) {
									if (success && records.length != 0) {
										var data = [];
										for (var key in records) {
											data.push(records[key].getData());
										};
										this.config.setZhiHuiGrid(data, DB.ZhiHuiMain);
										DB.ZhiHuiMain.setActiveItem(0);
									};
								},
								scope : this,
							});
						},
						element : "element",
					},
				},
			}, {
				xtype : "spacer",
			}, {
				xtype : "container",
				html : "<div style = \"height : 8%; width : 33.33%; \"><img style = \"margin-top : 5%; height : 90%;\" src = \"resources/icons/FeedBackBtn.png\" /><div>",
				listeners : {
					tap : {
						fn : function () {
							DoSwitch("FeedBack");
							DB.FeedBackTop.setTitle("意见反馈");
							DoLoad(DB.FeedBackMain.getStore(), "ZhiHui/GetFeedBack.jsp?appId=" + defaultBase[0]["id"]);
						},
						element : "element",
					},
				},
			}, {
				xtype : "spacer",
			},
		],
	},
});
