var div = document.getElementById("player-nowplaying");
var re = new RegExp(/fav_item_/);
for(i=0;i<div.childNodes.length;i++){
	var m = re.test(div.childNodes[i].id);
	if (m){
		var a = div.childNodes[i];
		var e = document.createEvent('MouseEvents');
		e.initEvent( 'click', true, true );
		a.dispatchEvent(e);
	}
}
