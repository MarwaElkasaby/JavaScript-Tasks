let btn=document.getElementsByTagName('button')[0];
let time=document.getElementsByTagName('div')[0];
let msg=document.getElementsByTagName('div')[1];
let interval;

function displayTime()
{
  let t= new Date();
let hours=t.getHours();
let minutes=t.getMinutes();
let sec=t.getSeconds();
let fullTime=hours +":" +minutes+":"+sec;
console.log(fullTime);  
time.textContent=fullTime;
msg.textContent='to stop timer: click alt+w';
}

function stop(){
    
    clearInterval(interval);
    msg.textContent='';
    alert("time stoped");
    
}

btn.addEventListener('click',function(){
alert("timer started");
interval=setInterval(displayTime,1000);
});

window.addEventListener('keydown',function(e){
    if(e.altKey && e.key==='w')
        {
          console.log("pressed");
          stop();  
        }
        
});