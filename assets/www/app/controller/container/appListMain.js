Ext.define("Project.controller.container.appListMain", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			appListMain : "appListMain",
		},
		control : {
			appListMain : {
				itemtap : "onAppListMainItemtap",
			},
		},
	},
	onAppListMainItemtap : function (list, index, target, record, e, eOpts) {
		var DATA = [];
		Ext.getStore("webCategoryStore").load({
			callback : function (records, operation, success) {
				if (success && records.lenght != 0) {
					for (var KEY in records) {
						var flag = false;
						var data = records[KEY].getData();
						if (data.categoryLevel != "1") {
							continue;
						};
						for (var key in DB.customCategory) {
							if (data["categoryId"] == DB.customCategory[key]["categoryId"]) {
								flag = true;
							};
						};
						if (flag) {
							data.categoryListCheck = "resources/icons/Checked.png";
						} else {
							data.categoryListCheck = "resources/icons/noIcon.png";
						};
						DATA.push(data);
					};
					DB.categoryListMain.getStore().setData(DATA);
				};
			},
			scope : this,
		});
		DoSwitch("categoryList");
	},
});
