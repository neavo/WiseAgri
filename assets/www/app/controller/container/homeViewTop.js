Ext.define("Project.controller.container.homeViewTop", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	launch : function () {
		var handle = setInterval(function () {
				if (defaultAppLoaded) {
					DB.homeViewTop.setTitle("<b>" + defaultBase[0]["location"] + " • " + defaultBase[0]["name"] + "</b>");
					clearInterval(handle);
				};
			}, 50);
	},
});
