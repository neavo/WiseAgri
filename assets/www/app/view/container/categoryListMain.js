Ext.define("Project.view.container.categoryListMain", {
	extend : "Ext.List",
	xtype : "categoryListMain",
	config : {
		cls : "categoryList",
		store : "webCategoryStore",
		ui : "round",
		itemTpl : "<img class = categoryListIcon src = {categoryIconUrl} />"
		+ "<img class = categoryListCheck src = resources/icons/Checked.png />"
		+ "<div class = categoryListName><b>{categoryName} </b></div>",
	},
});
