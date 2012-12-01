Ext.define("Project.model.categoryModel", {
	extend : "Ext.data.Model",
	config : {
		fields : [
			"type", "id", "name",
			"iconUrl", "style", "location",
		],
	},
});
