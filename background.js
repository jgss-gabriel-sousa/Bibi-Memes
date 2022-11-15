const backgrounds = [
    "#FBAB7E",
    "#8EC5FC",
    "#FF9A8B",
    "#FDEB71",
    "#ABDCFF",
    "#F6CEEC",
]

function rand(min, max){
    return Math.floor(Math.random() * max) + min;
}

let actualBg = rand(0,backgrounds.length);
function changeBackground(){
    let newBg;
    do{
        newBg = rand(0,backgrounds.length);
    }while(newBg == actualBg);

    const body = document.querySelector("body");

    body.style.backgroundColor = backgrounds[actualBg];
    actualBg = newBg;
}