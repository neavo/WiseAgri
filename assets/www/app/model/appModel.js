Ext.define("Project.model.appModel", {
	extend : "Ext.data.Model",
	config : {
		fields : [
			"type", "id", "name",
			"iconUrl", "style", "location",
		],
	},
});
