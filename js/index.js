const onLeft = document.querySelector('.left');
const onRight = document.querySelector('.right');
const photos = document.querySelectorAll('.carousel__content img');
let currentPhoto = 0;

onLeft.addEventListener('click', goToLeft);
onRight.addEventListener('click', goToRight);

function goToLeft() {
    currentPhoto = currentPhoto === 0?photos.length-1:currentPhoto-1;
    setClassName();
}

function goToRight() {
    currentPhoto = currentPhoto === photos.length-1?0:currentPhoto+1;
    setClassName();
}

function setClassName() {
    debugger
    photos.forEach(e => e.className = "");
    switch(currentPhoto) {
        case 2:
            photos[photos.length-1].className = "invisible_left";
            photos[currentPhoto-2].className = "before_previous";
            photos[currentPhoto-1].className = "previous";
            photos[currentPhoto].className = "current";
            photos[currentPhoto+1].className = "next";
            photos[currentPhoto+2].className = "after_next";
            photos[currentPhoto+3].className = "invisible_right";
            break;
        case 1:
            photos[photos.length-2].className = "invisible_left";
            photos[photos.length-1].className = "before_previous";
            photos[currentPhoto-1].className = "previous";
            photos[currentPhoto].className = "current";
            photos[currentPhoto+1].className = "next";
            photos[currentPhoto+2].className = "after_next";
            photos[currentPhoto+3].className = "invisible_right";
        break;
        case 0:
            photos[photos.length-3].className = "invisible_left";
            photos[photos.length-2].className = "before_previous";
            photos[photos.length-1].className = "previous";
            photos[currentPhoto].className = "current";
            photos[currentPhoto+1].className = "next";
            photos[currentPhoto+2].className = "after_next";
            photos[currentPhoto+3].className = "invisible_right";
        break;
        case photos.length-1:
            photos[currentPhoto-3].className = "invisible_left";
            photos[currentPhoto-2].className = "before_previous";
            photos[currentPhoto-1].className = "previous";
            photos[currentPhoto].className = "current";
            photos[0].className = "next";
            photos[1].className = "after_next";
            photos[2].className = "invisible_right";
            
        break;
        case photos.length-2:
            photos[currentPhoto-3].className = "invisible_left";
            photos[currentPhoto-2].className = "before_previous";
            photos[currentPhoto-1].className = "previous";
            photos[currentPhoto].className = "current";
            photos[currentPhoto+1].className = "next";
            photos[0].className = "after_next";
            photos[1].className = "invisible_right";
            break;
        case photos.length-3:
            photos[currentPhoto-3].className = "invisible_left";
            photos[currentPhoto-2].className = "before_previous";
            photos[currentPhoto-1].className = "previous";
            photos[currentPhoto].className = "current";
            photos[currentPhoto+1].className = "next";
            photos[currentPhoto+2].className = "after_next";
            photos[0].className = "invisible_right";
            break;
        default:
            photos[currentPhoto-3].className = "invisible_left";
            photos[currentPhoto-2].className = "before_previous";
            photos[currentPhoto-1].className = "previous";
            photos[currentPhoto].className = "current";
            photos[currentPhoto+1].className = "next";
            photos[currentPhoto+2].className = "after_next";
            photos[currentPhoto+3].className = "invisible_right";
        break;


    }
    
}