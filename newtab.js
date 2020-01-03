
function set_random_hue() {
	console.log('hueing');
	var el = document.getElementById("content");
	if (el) {
		console.log('element', el);
		window.foo = el;
		var hue = Math.round(Math.random() * 360);
		el.style.filter = "hue-rotate(" + hue + "deg)";
		el.style.opacity = 0.7;
	}
}

set_random_hue();
