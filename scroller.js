var list = document.querySelectorAll("ul")[0];
var listItems = document.querySelectorAll("li");
var isIn = document.querySelectorAll("#is-in-box")[0];
var isOut = document.querySelectorAll("#is-out-of-box")[0];
var images = document.querySelectorAll("#images")[0];
var isInitialTop = isIn.getBoundingClientRect().top;
var resetIsPosition;
		
isOut.style.top = isInitialTop + "px";
isOut.style.display = "block";
for (var i = 0; i < listItems.length; i++) {
	listItems[i].onmouseover = function(){
		isIn.style.bottom = "-" + (this.getBoundingClientRect().top - isInitialTop) + "px";
		isOut.style.top = "" + (this.getBoundingClientRect().top) + "px";
		clearTimeout(resetIsPosition);
	};
};
list.onmouseout = function(){
	resetIsPosition = setTimeout(function(){ isIn.style.bottom = "0px"; isOut.style.top = isInitialTop + "px"; }, 1000);
};