var a = document.getElementById('playerPrev');
var e = document.createEvent('MouseEvents');
    e.initEvent( 'click', true, true );
    a.dispatchEvent(e);
	
	 	
	var div = document.getElementById("player-nowplaying");
	var string = div.childNodes[1].innerHTML + " - " + div.childNodes[3].innerHTML;
  div = document.getElementById("playerFav");
  var re = new RegExp(/fav-[onf]{2,3}/);
  var loved = re.exec(div.className);

	playbutton = document.getElementById("playerPlay");
	chrome.extension.sendRequest({nowplaying: string, "loved": loved, "playpause":playbutton.className});
