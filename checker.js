if (document.defaultView.getComputedStyle(document.getElementById('player-container'),"").display == "none"){
	chrome.extension.sendRequest({exists: false});
}
else {
	var div = document.getElementById("player-nowplaying");
	var string = div.childNodes[0].innerHTML + " - " + div.childNodes[2].innerHTML;
	playbutton = document.getElementById("playerPlay");

	div = document.getElementById("playerFav");
var re = new RegExp(/fav-[onf]{2,3}/);
var loved = re.exec(div.className);
	chrome.extension.sendRequest({"exists": string, "playpause": playbutton.className, "loved": loved});

		
}
