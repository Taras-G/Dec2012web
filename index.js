// JavaScript Document
var ids=new Array();
var imgid=new Array();
var selected;

function switchid(id){	
	hideallids();
	showdiv(id);
}

function hideallids(){
	//loop through the array and hide each element by id
	for (var i=0;i<ids.length;i++){
		hidediv(ids[i]);	
	}		  
}

function hidediv(id) {
	//safe function to hide an element with a specified id
	if (document.getElementById) { // DOM3 = IE5, NS6
		document.getElementById(id).style.display = "none";
		document.getElementById(id.split("d")[0]).style.opacity="0.5";
	}
	else {
		if (document.layers) { // Netscape 4
			document.id.display = "none";
		}
		else { // IE 4
			document.all.id.style.display = "none";
		}
	}
}

function showdiv(id) {
	//safe function to show an element with a specified id
		  
	if (document.getElementById) { // DOM3 = IE5, NS6
		document.getElementById(id).style.display = "block";
		selected = (id.split("d")[0]);
		document.getElementById(selected).style.opacity="1.0";
		
	}
	else {
		if (document.layers) { // Netscape 4
			document.id.display = "block";
		}
		else { // IE 4
			document.all.id.style.display = "block";
		}
	}
}

function bigImg(x) {
	x.style.height="90px";
	x.style.width="90px";
	x.style.opacity="1.0";
	x.style.zIndex="50";
}

function normalImg(x) {
	x.style.height="70px";
	x.style.width="70px";
	x.style.zIndex="0";
	if (x.id != selected) {
		x.style.opacity="0.5";
	}
}

window.onload = function(){
	var img;
	var leftpx = 15;
	for (var i=0;i<32;i++) {
		ids.push("char" +  (i+1).toString() + "d");
		imgid.push("char" +  (i+1).toString());
	}
	for (var i=0;i<32;i++) {
		img = document.getElementById(imgid[i]);
		img.style.position="absolute";
		img.style.left=leftpx.toString() + "px";
		leftpx += 80;
		if (i == 11 || i == 23) {
			leftpx = 0;
		}
	}
	document.getElementById(window.location.href.toString().split("#")[1]).click();
}