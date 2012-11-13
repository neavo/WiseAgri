Ext.define("Project.store.webAppStore", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.appModel",
		proxy : {
			type : "ajax",
			url : "data/appList.json",
		},
	},
});
