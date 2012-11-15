Ext.define("Project.view.container.categoryListMain", {
	extend : "Ext.List",
	xtype : "categoryListMain",
	config : {
		cls : "BackGround",
		store : "categoryListStore",
		itemTpl : "<img class = categoryListIcon src = {categoryIconUrl} />"
		 + "<img class = categoryListDisclosure src = resources/icons/disclosureIcon.png />"
		 + "<div class = categoryListName><b>{categoryName} </b></div>",
	},
});
