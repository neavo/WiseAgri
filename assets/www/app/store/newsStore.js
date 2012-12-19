Ext.define("Project.store.newsStore", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.newsModel",
		pageSize : 5,
	},
});
