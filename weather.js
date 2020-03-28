const COORDS = 'coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoError(){
    console.log("Cannot access geo location.");
}

function handleGeoSuccess(position){
    const latitude=position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude,
    };
    saveCoords(coordsObj);
}

function askForCoords(){ //현재 좌표 가져오는 함수
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoordes(){
    const loadedCords= localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    }else{
        //getWeather
    }
}

function init(){
 loadCoordes();
}

init();