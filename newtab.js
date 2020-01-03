function rndi(max) {
	return Math.round(Math.random() * max);
}

function set_random_hue(el) {
	var hue = rndi(360);
	//document.title = "(" + hue + ")";
	el.style.filter = "hue-rotate(" + hue + "deg)";
}

//set_random_hue(document.getElementById("content"));
set_random_hue(document.body);
