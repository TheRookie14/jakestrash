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

splashes = [
    "screw hayfever",
    "amogus",
    "dream is bad",
    "reeeeeeeeeeeeeeee",
    "when the impostor is sus",
    "im bored",
    "also try xkcd",
    "not an nft",
    "just the worst site",
    "zoinks",
    "yikes",
    "jeepers",
    "jinkies",
    "rip daft punk",
    "bonk",
    "404 splash not found",
    "20 GOTO 10",
    "minceraft",
    "8k 120fps ultra graphics",
    "what is a javascript",
    "stream american noir",
    "say no to cow juice",
    "type the konami code",
    "where awr yew",
    "off and on again",
    "wow, a gun",
    "01189998819991197253",
    "grand dad",
    ":hsraT s'ekaJ",
    "that's numberwang",
    "completed it mate",
    "you owe me a fiver",
    "sub4sub?",
    "missingno",
    "THRILLHO",
    "yesterday i asked you",
    "give me the butter",
    "was that the bite of 87",
    "aww man",
    "the cake is a lie",
    "the cake is a spy",
    "ǝʇɐɯ ʎɐpƃ",
    "glory to arstotzka",
    "russell smash",
    "here we go again",
    "are you my mummy",
    "don't blink",
    "no stairway, denied",
    "omg neil cicierega"
]

document.title = "Jake's Trash: "+splashes[Math.floor(Math.random()*splashes.length)]
