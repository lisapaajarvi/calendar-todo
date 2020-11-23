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

    hours = formatTime(hours);
    minutes = formatTime(minutes);

    const clockDiv = document.getElementById("clock-display");
    clockDiv.innerText = hours + ":" + minutes;
}

function formatTime (counter) {
    if (counter < 10) {
        return "0" + counter;
    }
    return counter;
}
