var a = document.getElementById('playerPrev');
var e = document.createEvent('MouseEvents');
    e.initEvent( 'click', true, true );
    a.dispatchEvent(e);
	
	var div = document.getElementById("player-nowplaying");
	var loved="fav-off"
	var string = div.childNodes[0].innerHTML + " - " + div.childNodes[2].innerHTML;
	var re = new RegExp(/fav_item_/);
	for(i=0;i<div.childNodes.length;i++){
	var m = re.test(div.childNodes[i].id);
	if (m){
		loved=div.childNodes[i].className;
	}
	}
	chrome.extension.sendRequest({nowplaying: string, "loved": loved});;