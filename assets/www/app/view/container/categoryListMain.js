Ext.define("Project.view.container.categoryListMain", {
	extend : "Ext.List",
	xtype : "categoryListMain",
	config : {
		store : "categoryListStore",
		cls : "categoryList",
		ui : "round",
		itemTpl : "<img class = categoryListIcon src = {categoryIconUrl} />"
		+ "<img class = categoryListCheck src = {categoryListCheck} />"
		+ "<div class = categoryListName><b>{categoryName} </b></div>",
	},
});
