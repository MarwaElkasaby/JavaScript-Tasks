var slideShow=document.getElementsByTagName("button")[0];
var stop=document.getElementsByTagName("button")[1];
var previous=document.getElementsByTagName("button")[2];
var next=document.getElementsByTagName("button")[3];

var img=document.getElementsByTagName('img')[0];
var photos=["1.jpg", "2.jpg", "3.jpg" , "4.png"];

var i=0;
next.addEventListener('click',function(){
    
    if(i <photos.length-1)
        {
            i++;  
        img.src=photos[i];         
        }
        


console.log(i);
});

previous.addEventListener('click',function(){
    

    if (i>0) {
        i--;
        img.src = photos[i];
    }

});
let interval;
slideShow.addEventListener('click',function () {
    interval=setInterval(() => {
        i++; 
         
        if(i>=photos.length)
            {
                i=0;
            }
                    img.src=photos[i];

        
    }, 1000);
});

stop.addEventListener('click',function(){
clearInterval(interval);
});
