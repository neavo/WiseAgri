Ext.define("Project.store.defaultAppStore", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.appModel",
		proxy : {
			type : "ajax",
			url : "data/defaultApp.json",
		},
	},
});
