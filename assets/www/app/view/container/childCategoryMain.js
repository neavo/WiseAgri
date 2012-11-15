Ext.define("Project.view.container.childCategoryMain", {
	extend : "Ext.List",
	xtype : "childCategoryMain",
	config : {
		cls : "BackGround",
		store : "childCategoryStore",
		itemTpl : "<img class = childCategoryIcon src = {categoryIconUrl} />"
		 + "<img class = childCategoryDisclosure src = resources/icons/disclosureIcon.png />"
		 + "<div class = childCategoryName><b>{categoryName} </b></div>",
	},
});
