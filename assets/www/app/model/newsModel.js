Ext.define("Project.model.newsModel", {
	extend : "Ext.data.Model",
	config : {
		fields : ["categoryId", "title", "publisher", "dateTime", "iconUrl", "videoUrl", "imageUrl", "content"],
	},
});
