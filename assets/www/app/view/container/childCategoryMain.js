Ext.define("Project.view.container.childCategoryMain", {
	extend : "Ext.List",
	xtype : "childCategoryMain",
	config : {
		cls : "categoryList",
		store : "childCategoryStore",
		onItemDisclosure : true,
		itemTpl : "<img class = categoryListIcon src = {categoryIconUrl} />"
		 + "<div class = categoryListName><b>{categoryName} </b></div>",
	},
});
