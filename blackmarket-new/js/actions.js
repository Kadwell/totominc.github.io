function Action() { Log("Calling Action()"); };
Action.shoot = function() {
	if (shoot[0] > 0) {
		$("#a-1, #a-2").attr("onclick", "");
		$("#a-1, #a-2").attr("class", "btn btn-success center-btn disabled");
        window.setTimeout(function() {
            shoot[0]--;
            shoot[5]++;
            gainMoney(getShootReward());
            $("#a-1").attr("onclick", "Action.shoot();");
            $("#a-2").attr("onclick", "Action.reload();");
            $("#a-1, #a-2").attr("class", "btn btn-success center-btn");
        }, shoot[3]);
        $("#shoot-actions").animate({width: "100%"}, shoot[3], "linear");
        $("#shoot-actions").animate({width: "0%"}, 0, "linear");
        $("#shoot-navbar").animate({width: "100%"}, shoot[3], "linear");
        $("#shoot-navbar").animate({width: "0%"}, 0, "linear");
	};
};
Action.reload = function() {
	if (shoot[0] < shoot[2]) {
		$("#a-1, #a-2").attr("onclick", "");
		$("#a-1, #a-2").attr("class", "btn btn-success center-btn disabled");
        window.setTimeout(function() {
            shoot[0] = shoot[2];
            shoot[6]++;
            $("#a-1").attr("onclick", "Action.shoot();");
            $("#a-2").attr("onclick", "Action.reload();");
            $("#a-1, #a-2").attr("class", "btn btn-success center-btn");
        }, shoot[4]);
        $("#reload-actions").animate({width: "100%"}, shoot[4], "linear");
        $("#reload-actions").animate({width: "0%"}, 0, "linear");
        $("#reload-navbar").animate({width: "100%"}, shoot[4], "linear");
        $("#reload-navbar").animate({width: "0%"}, 0, "linear");
	};
};