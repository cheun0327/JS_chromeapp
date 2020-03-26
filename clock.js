const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    //현재 시간을 가져와서 보여줌
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours<10 ? `0${hours}` : hours}:${
        minutes<10 ? `0${minutes}` : minutes}:${seconds<10 ? `0${seconds}` : seconds}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();