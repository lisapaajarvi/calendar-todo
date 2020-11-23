window.addEventListener("load", main)

const date = new Date ();
let month = "";

function main() {
    startClock();   
    //addEventListeners();
}

//addEventListeners() {}

function startClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

function updateClock(){
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = formatTime(hours);
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    const clockDiv = document.getElementById("clock-div");
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds;
}

function formatTime (counter) {
    if (counter < 10) {
        return "0" + counter;
    }
    return counter;
}
