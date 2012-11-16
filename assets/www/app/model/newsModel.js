Ext.define("Project.model.newsModel", {
	extend : "Ext.data.Model",
	config : {
		fields : [
			"newsTitle",
			"newsPublisher",
			"dateTime",
			"iconUrl",
			"videoUrl",
			"imageUrl",
			"newsContent",
		],
	},
});
