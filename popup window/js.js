let newWindow=window.open("index1.html","child window","width=300 ,height=500");

function close(){
    newWindow.close();
}

window.setTimeout(close,5000);

let hello="Hello";
let i=0;

function showHello(){
    if(i<=hello.length)
        {
            newWindow.document.getElementsByTagName("div")[0].textContent=hello.substring(0,i);
           i++ ;
           setTimeout(showHello,100);
        }            

}
showHello();

