if (document.defaultView.getComputedStyle(document.getElementById('player-container'),"").display == "none"){
	chrome.extension.sendRequest({exists: false});
}
else {
	var div = document.getElementById("player-nowplaying");
	var string = div.childNodes[1].innerHTML + " - " + div.childNodes[3].innerHTML;
	playbutton = document.getElementById("playerPlay");

	div = document.getElementById("playerFav");
var re = new RegExp(/fav-[onf]{2,3}/);
var loved = re.exec(div.className);
	chrome.extension.sendRequest({"exists": string, "playpause": playbutton.className, "loved": loved});

		
}
