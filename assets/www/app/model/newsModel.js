Ext.define("Project.model.newsModel", {
	extend : "Ext.data.Model",
	config : {
		fields : [
			"newsId",
			"newsTitle",
			"newsPublisher",
			"dateTime",
			"iconUrl",
			"videoUrl",
			"imageUrl",
			"newsContent",
			"skimNum",
		],
	},
});
