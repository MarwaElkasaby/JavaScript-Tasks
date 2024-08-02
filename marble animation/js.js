var img = document.getElementsByTagName("img");

let i = 0;
let interval;

function startAnimation() {
    
    interval = setInterval(() => {
        img[i].src = "marble1.jpg";
        if (i < 4) {
            i++;
        }
        else
            i = 0;
        img[i].src = "marble2.jpg";

    }, 1000);
}

function stopAnimation() {
    clearInterval(interval);
}

for (marble of img) {
    marble.addEventListener("mouseover", stopAnimation);
    marble.addEventListener("mouseout", startAnimation);
}


startAnimation();