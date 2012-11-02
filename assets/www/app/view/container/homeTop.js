Ext.define("Project.view.container.homeTop", {
	extend : "Ext.Toolbar",
	xtype : "homeTop",
	config : {
		docked : "top",
		html : "<img class = weatherImage src = " + "resources/images/weather/" + DB.weather.icon + ".png >"
		 + "<div class = weatherTextLine><b></b>载入天气中 ... </div>",
	},
});
