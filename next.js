var a = document.getElementById('playerNext');
var e = document.createEvent('MouseEvents');
    e.initEvent( 'click', true, true );
    a.dispatchEvent(e);

	var div = document.getElementById("playerFav");
var re = new RegExp(/fav-[onf]{2,3}/);
var loved = re.exec(div.className);
	chrome.extension.sendRequest({nowplaying: string, "loved": loved});
	
