var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;

var keyHandler = function (event) {

	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}

	current++;

	if (pattern.length === current) {
		current = 0;
		rr = document.createElement("iframe");
		rr.frameBorder = "0";
		rr.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
		rr.width = "100%";
		rr.height="100%";
		rr.style.zIndex = "-2";
		rr.style.position = "fixed";
		rr.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
		document.getElementsByTagName("body")[0].appendChild(rr);
		var x = document.getElementById("videoBG");
		x.style.animationFillMode = "forwards";
		x.animate([{opacity:1},{opacity:0}],2500);
		setTimeout(function(){ x.parentNode.removeChild(x); }, 2500);


	}

};

document.addEventListener('keydown', keyHandler, false);
