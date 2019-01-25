var list = document.querySelectorAll("ul")[0];
var listItems = document.querySelectorAll("li");
var isOut = document.querySelectorAll("#is-out-of-box")[0];
var images = document.querySelectorAll("#images")[0];
var resetIsPosition;
                    
isOut.style.top = "" + listItems[0].getBoundingClientRect().top + "px";
isOut.style.display = "block";
for (var i = 0; i < listItems.length; i++) {
    listItems[i].onmouseover = function(){
        isOut.style.top = "" + (this.getBoundingClientRect().top) + "px";
            clearTimeout(resetIsPosition);
    };
};

list.onmouseout = function(){
    resetIsPosition = setTimeout(function(){isOut.style.top = "" + listItems[0].getBoundingClientRect().top + "px"; }, 750);
};