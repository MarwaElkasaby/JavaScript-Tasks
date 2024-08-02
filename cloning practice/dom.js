function RandomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
}
var originalDiv=document.getElementsByTagName("div");

originalDiv[0].onclick=function(){
    var subDiv=originalDiv[0].cloneNode(false);
    subDiv.innerHTML="sub div";
    subDiv.style.backgroundColor=RandomColor();
    document.body.append(subDiv);
    

}
