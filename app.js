const IMAGES = 82;
const BACKGROUNDS = 5;

let actualBackground = "bg_0";
let actualImg = "0";
let imageApiUrl = "https://raw.githubusercontent.com/jgss-gabriel-sousa/bibi-image-api/main/img/"

function rand(min, max){
    return Math.floor(Math.random() * max) + min;
}

function newImage(){
    loadImage();
    changeBackground();
}newImage();

function loadImage(value){
    let newImg;

    if(!value){
        do{
            newImg = rand(1, IMAGES).toString();
        }while(newImg == actualImg)   
    }
    else newImg = value.toString();

    document.querySelector("img").src = imageApiUrl+"bibi ("+newImg+").jpg";
    document.getElementById("downloadImage").href = imageApiUrl+"bibi ("+newImg+").jpg";
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

function hoursBetweenDates(first, second){
    const msBetweenDates = Math.abs(first.getTime() - second.getTime());
    return msBetweenDates / (60 * 60 * 1000);
}


function todayBibi(){
    const newImage = true;

    if(localStorage.getItem("lastTodayBibi") != null){
        ;
    }

    if(newImage){
        const timeNow = new Date();

        localStorage.setItem("lastTodayBibi",timeNow);
    }
}