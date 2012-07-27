var div = document.getElementById("playerFav");
var e = document.createEvent('MouseEvents');
e.initEvent( 'click', true, true );
div.dispatchEvent(e);
