if (document.defaultView.getComputedStyle(document.getElementById('player-container'),"").display == "none"){
	chrome.extension.sendRequest({exists: false});
}
else {
	var div = document.getElementById("player-nowplaying");
	var string = div.childNodes[0].innerHTML + " - " + div.childNodes[2].innerHTML;
	var loved="fav-off"
	playbutton = document.getElementById("playerPlay");
	var re = new RegExp(/fav_item_/);
	for(i=0;i<div.childNodes.length;i++){
	var m = re.test(div.childNodes[i].id);
	if (m){
		loved=div.childNodes[i].className;
	}
	}
	chrome.extension.sendRequest({"exists": string, "playpause": playbutton.className, "loved": loved});

		
}