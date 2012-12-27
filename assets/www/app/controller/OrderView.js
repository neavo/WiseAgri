Ext.define("Project.controller.OrderView", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	SetYiNongGrid : function (d, l) {
		var e = 0, c = 0, b = 0;
		var f = "";
		var a = "";
		for (e = 0; e < 3; e++) {
			if (e == 0 && c == 0) {
				f = Ext.create("Ext.Container", {
						layout : "vbox",
					})
			}
			a = Ext.create("Ext.Container", {
					layout : "hbox",
				});
			for (c = 0; c < 3; c++) {
				a.add(Ext.create("Ext.Spacer"));
				if (d[b]) {
					var m = false;
					for (var g in myOrder) {
						if (d[b]["id"] == myOrder[g]["id"]) {
							m = true
						}
					}
					var h = Ext.create("Ext.Container", {
							data : d[b],
							isOrdered : m,
							cls : "orderViewIconContainer",
							DoOrder : function (i, k, j) {
								if (j) {
									Ext.Msg.confirm("", "是否取消订阅“翼农 • " + k.name + "”？", function (o, p, n) {
										if (o == "yes") {
											DoSQL('DELETE FROM myOrder WHERE id = "' + k.id + '"');
											i.setHtml("<img class = orderViewIcon src = " + k.iconUrl + " />")
										}
									});
									return false
								} else {
									Ext.Msg.confirm("", "是否要订阅“翼农 • " + k.name + "”？", function (o, p, n) {
										if (o == "yes") {
											DoSQL('INSERT INTO myOrder (type, id, name, iconUrl, style, location) VALUES ("YiNong", "' + k.id + '", "' + k.name + '", "' + k.iconUrl + '", "' + k.style + '", "' + k.location + '")');
											i.setHtml("<img class = orderViewIcon src = " + k.iconUrl + " /><img class = orderViewIconOverlay src = resources/icons/Checked.png >")
										}
									});
									return true
								}
							},
							listeners : {
								tap : {
									fn : function () {
										this.config.isOrdered = this.config.DoOrder(this, this.config.data, this.config.isOrdered)
									},
									element : "element",
								},
							},
						});
					if (m) {
						h.setHtml("<img class = orderViewIcon src = " + h.config.data.iconUrl + " /><img class = orderViewIconOverlay src = resources/icons/Checked.png >")
					}
					if (!m) {
						h.setHtml("<img class = orderViewIcon src = " + h.config.data.iconUrl + " />")
					}
					a.add(h)
				} else {
					a.add(Ext.create("Ext.Container", {
							html : "<img class = orderViewIcon src = resources/icons/noIcon.png >",
						}))
				}
				b = b + 1
			}
			a.add(Ext.create("Ext.Spacer"));
			f.add(Ext.create("Ext.Spacer"));
			f.add(a)
		}
		f.add(Ext.create("Ext.Spacer"));
		l.add(f);
		if (d[b] && l.getItems().length < 9) {
			this.setYiNongGrid(d.slice(b), l)
		}
	},
	SetZhiHuiGrid : function (d, l) {
		var e = 0, c = 0, b = 0;
		var f = "";
		var a = "";
		for (e = 0; e < 3; e++) {
			if (e == 0 && c == 0) {
				f = Ext.create("Ext.Container", {
						layout : "vbox",
					})
			}
			a = Ext.create("Ext.Container", {
					layout : "hbox",
				});
			for (c = 0; c < 3; c++) {
				a.add(Ext.create("Ext.Spacer"));
				if (d[b]) {
					var m = false;
					for (var g in myOrder) {
						if (d[b]["id"] == myOrder[g]["id"]) {
							m = true
						}
					}
					var h = Ext.create("Ext.Container", {
							data : d[b],
							isOrdered : m,
							cls : "orderViewIconContainer",
							DoOrder : function (i, k, j) {
								if (j) {
									Ext.Msg.confirm("", "是否取消订阅“" + k.location + " • " + k.name + "”？", function (o, p, n) {
										if (o == "yes") {
											DoSQL('DELETE FROM myOrder WHERE id = "' + k.id + '"');
											i.setHtml("<img class = orderViewIcon src = " + k.iconUrl + " />")
										}
									});
									return false
								} else {
									Ext.Msg.confirm("", "是否要订阅“" + k.location + " • " + k.name + "”？", function (o, p, n) {
										if (o == "yes") {
											DoSQL('INSERT INTO myOrder (type, id, name, iconUrl, style, location) VALUES ("app", "' + k.id + '", "' + k.name + '", "' + k.iconUrl + '", "' + k.style + '", "' + k.location + '")');
											i.setHtml("<img class = orderViewIcon src = " + k.iconUrl + " /><img class = orderViewIconOverlay src = resources/icons/Checked.png >")
										}
									});
									return true
								}
							},
							listeners : {
								tap : {
									fn : function () {
										this.config.isOrdered = this.config.DoOrder(this, this.config.data, this.config.isOrdered)
									},
									element : "element",
								},
							},
						});
					if (m) {
						h.setHtml("<img class = orderViewIcon src = " + h.config.data.iconUrl + " /><img class = orderViewIconOverlay src = resources/icons/Checked.png >")
					}
					if (!m) {
						h.setHtml("<img class = orderViewIcon src = " + h.config.data.iconUrl + " />")
					}
					a.add(h)
				} else {
					a.add(Ext.create("Ext.Container", {
							html : "<img class = orderViewIcon src = resources/icons/noIcon.png >",
						}))
				}
				b = b + 1
			}
			a.add(Ext.create("Ext.Spacer"));
			f.add(Ext.create("Ext.Spacer"));
			f.add(a)
		}
		f.add(Ext.create("Ext.Spacer"));
		l.add(f);
		if (d[b] && l.getItems().length < 9) {
			this.SetZhiHuiGrid(d.slice(b), l)
		}
	},
	launch : function () {
		var ZhiHuiBtn = Ext.getCmp("ZhiHuiBtn");
		var YiNongBtn = Ext.getCmp("YiNongBtn");
		var CheckedStyle = "background : #FFFFFF; color : #2BA4E6; -webkit-border-radius : 1em; padding-top : 0.2em; padding-bottom : 0.2em;";
		var UnCheckedStyle = "background : #2BA4E6; color : #FFFFFF; -webkit-border-radius : 1em; padding-top : 0.2em; padding-bottom : 0.2em;";
		YiNongBtn.addListener({
			tap : {
				fn : function () {
					if (YiNongBtn.getStyle() != CheckedStyle) {
						YiNongBtn.setStyle(CheckedStyle);
						ZhiHuiBtn.setStyle(UnCheckedStyle);
						Ext.getStore("YiNongStore").setProxy({
							type : "jsonp",
							url : ServerUrl + "YiNong/GetAppList.jsp",
						});
						Ext.getStore("YiNongStore").load({
							callback : function (f, e, i) {
								if (i && f.lenght != 0) {
									var h = [];
									for (var g in f) {
										h.push(f[g].getData())
									}
									Ext.getCmp("OrderViewMain").removeAll(true);
									this.SetYiNongGrid(h, Ext.getCmp("OrderViewMain"));
									Ext.getCmp("OrderViewMain").setActiveItem(0)
								}
							},
							scope : this,
						})
					}
				},
				element : "element",
				scope : this,
			},
		});
		ZhiHuiBtn.addListener({
			tap : {
				fn : function () {
					if (ZhiHuiBtn.getStyle() != CheckedStyle) {
						ZhiHuiBtn.setStyle(CheckedStyle);
						YiNongBtn.setStyle(UnCheckedStyle);
						var e = ServerUrl + "ZhiHui/GetAppList.jsp?appId=";
						for (var f in defaultBase) {
							e = e + defaultBase[f]["id"] + ";"
						}
						for (var f in defaultApp) {
							e = e + defaultApp[f]["id"] + ";"
						}
						Ext.getStore("appListStore").setProxy({
							type : "jsonp",
							url : e,
						});
						Ext.getStore("appListStore").load({
							callback : function (h, g, k) {
								if (k && h.length != 0) {
									var j = [];
									for (var i in h) {
										j.push(h[i].getData())
									}
									Ext.getCmp("OrderViewMain").removeAll(true);
									this.SetZhiHuiGrid(j, Ext.getCmp("OrderViewMain"));
									Ext.getCmp("OrderViewMain").setActiveItem(0);
								}
							},
							scope : this,
						})
					}
				},
				element : "element",
				scope : this,
			},
		})
	},
});