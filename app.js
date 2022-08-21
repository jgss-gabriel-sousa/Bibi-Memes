const IMAGES = 19;
const BACKGROUNDS = 5;

let actualBackground = "bg_0";
let actualImg = "0";

function rand(min, max){
    return Math.floor(Math.random() * max) + min;
}

function loadImage(){
    let newImg;
    do{
        newImg = rand(0, IMAGES).toString();
    }while(newImg == actualImg)   

    document.querySelector("img").src = "/img/"+newImg+".jpg";
    document.getElementById("downloadImage").href = "/img/"+newImg+".jpg";
    actualImg = newImg;
}

function changeBackground(){
    let newBg;
    do{
        newBg = "bg_"+rand(0,BACKGROUNDS).toString();
    }while(newBg == actualBackground)   

    const body = document.querySelector("body");
    body.classList.remove(actualBackground);
    body.classList.add(newBg);
    actualBackground = newBg;
}

function newImage(){
    loadImage();
    changeBackground();
}newImage();