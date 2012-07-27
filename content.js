function checkLastSong(){
var players = document.getElementsByClassName('playdiv');
	var timer=true;
		last = players[players.length-1].childNodes[1];
		if (last.className=="play-ctrl pause"){
			alert("On the last song");
			timer=false;
			checkTimer();
		}
		if (timer){
		t = setTimeout("checkLastSong()",1000);
		}
}
function checkTimer(){
	
	var perc = document.getElementById("player-progress-playing").style.width
	perc = perc.slice(0,perc.length-1);
	console.log(curURL + " ---- " + document.URL);
	perc=perc*1;
	var timer=true;
	if (perc >85){
		alert("almost done perc:" + perc);
		var paginator = document.getElementsByClassName("this-page")[0];
		var links = document.getElementsByClassName("this-page")[0].parentNode.childNodes;
			for(var i =0;i<links.length;i++){
				if(links[i].tagName=="A"){
					alert(links[i]);
					var a = links[i]
					var e = document.createEvent('MouseEvents');
					e.initEvent( 'click', true, true );
					a.dispatchEvent(e);
					setTimeout("checkEnd(document.URL)",500);
					break;
				}
			}	
		timer=false;
	}
	if(timer){
	t=setTimeout("checkTimer()",500);
	}
}
function checkEnd(){
	var perc = document.getElementById("player-progress-playing").style.width
	perc = perc.slice(0,perc.length-1);
	perc=perc*1;
	var timer=true;
	if(document.URL!=curURL){
		alert("URL Changed! in checkEnd");
		timer=false;
		checkLastSong();
	}	
	if(perc>95){
		setTimeout("clickFirstSong()",1000);
		timer=false;
	}
	if(timer){
		t = setTimeout("checkEnd()",500);
	}
}

function clickFirstSong(){
	var players = document.getElementsByClassName('playdiv');
	first=players[0].childNodes[1];
	alert(first.id);
	var a = first
	var e = document.createEvent('MouseEvents');
	e.initEvent( 'click', true, true );
	a.dispatchEvent(e);
	checkLastSong();
}

function checkPlayablePage(){
	return document.getElementsByClassName('playdiv').length!=0;
}


if (checkPlayablePage()){
alert("loaded");
	checkLastSong();
}