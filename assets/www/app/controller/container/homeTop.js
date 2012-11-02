Ext.define("Project.controller.container.homeTop", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	launch : function () {
		setTimeout(function () {
			Ext.data.JsonP.request({
				url : "http://weather.china.xappengine.com/api",
				callbackKey : "callback",
				params : {
					city : "wuhan",
				},
				success : function (result) {
					if (result) {
						if (result.forecasts[0].code == 3 || result.forecasts[0].code == 4 || result.forecasts[0].code == 35 || result.forecasts[0].code == 37 || result.forecasts[0].code == 38 || result.forecasts[0].code == 39 || result.forecasts[0].code == 45 || result.forecasts[0].code == 47) {
							DB.weather.icon = "01";
						};
						if (result.forecasts[0].code == 13 || result.forecasts[0].code == 15 || result.forecasts[0].code == 16 || result.forecasts[0].code == 17 || result.forecasts[0].code == 18 || result.forecasts[0].code == 41 || result.forecasts[0].code == 42 || result.forecasts[0].code == 43 || result.forecasts[0].code == 46) {
							DB.weather.icon = "02";
						};
						if (result.forecasts[0].code == 14 || result.forecasts[0].code == 19 || result.forecasts[0].code == 20 || result.forecasts[0].code == 21 || result.forecasts[0].code == 23 || result.forecasts[0].code == 24) {
							DB.weather.icon = "03";
						};
						if (result.forecasts[0].code == 5 || result.forecasts[0].code == 6 || result.forecasts[0].code == 7 || result.forecasts[0].code == 10) {
							DB.weather.icon = "04";
						};
						if (result.forecasts[0].code == 0 || result.forecasts[0].code == 1 || result.forecasts[0].code == 2 || result.forecasts[0].code == 22 || result.forecasts[0].code == 25 || result.forecasts[0].code == 26) {
							DB.weather.icon = "05";
						};
						if (result.forecasts[0].code == 27 || result.forecasts[0].code == 28 || result.forecasts[0].code == 29 || result.forecasts[0].code == 30 || result.forecasts[0].code == 44) {
							DB.weather.icon = "06";
						};
						if (result.forecasts[0].code == 9 || result.forecasts[0].code == 9 || result.forecasts[0].code == 11 || result.forecasts[0].code == 12 || result.forecasts[0].code == 40) {
							DB.weather.icon = "07";
						};
						if (result.forecasts[0].code == 31 || result.forecasts[0].code == 32 || result.forecasts[0].code == 33 || result.forecasts[0].code == 34 || result.forecasts[0].code == 36) {
							DB.weather.icon = "08";
						};
						DB.weather.text = result.forecasts[0].text;
						DB.weather.low = result.forecasts[0].low;
						DB.weather.high = result.forecasts[0].high;
						if (DB.homeTop.getHtml() != "") {
							DB.homeTop.setHtml("<img class = weatherImage src = " + "resources/images/weather/" + DB.weather.icon + ".png >"
								 + "<div class = weatherTextLine><b>" + DB.weather.text + "　" + DB.weather.low + "℃ ~ " + DB.weather.high + "℃" + "<b></div>");
						};
					};
				},
			});
		}, 5000);
	},
});
