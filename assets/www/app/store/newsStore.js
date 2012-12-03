Ext.define("Project.store.newsStore", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.newsModel",
		proxy : {
			type : "ajax",
			url : "data/news.json",
		},
		pageSize : 5,
	},
});
