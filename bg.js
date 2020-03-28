const body = document.querySelector("body");

const IMG_NUMBER = 3;

function handleImageLoad(){
    console.log("finished loading");
}

function paintImage(imgNum){
    const image = new Image();
    image.src = `images/${imgNum + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
    //API에서 가져온다면 로딩 후에 빵 뜨게!
    //image.addEventListener("loadend", handleImageLoad);
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();