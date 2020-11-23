window.addEventListener("load", main)

const date = new Date ();
let month = "";

function main() {
    showClock();   
    //addEventListeners();
}

//addEventListeners() {}

function showClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

function updateClock(){
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();

    hours = formatTime(hours);
    minutes = formatTime(minutes);

    const clockHolder = document.getElementById("clock");
    clockHolder.innerText = hours + ":" + minutes;

    const weekdayHolder = document.getElementById("weekday-holder");
    weekdayHolder.innerText = getWeekday(date);

    const dateHolder = document.getElementById("date-holder");
    dateHolder.innerText = date.getDate();

    const monthHolder = document.getElementById("month-holder");
    monthHolder.innerText = getMonth(date);
}

function formatTime (counter) {
    if (counter < 10) {
        return "0" + counter;
    }
    return counter;
}

function getWeekday(date) {
    const weekdayIndex = date.getDay();
    switch(weekdayIndex) {
        case 0: return "Sönday";
        case 1: return "Måndag";
        case 2: return "Tisdag";
        case 3: return "Onsdag";
        case 4: return "Torsdag";
        case 5: return "Fredag";
        case 6: return "Lördag";
    }
}

function getMonth (date) {
    const monthIndex = date.getMonth();
    switch(monthIndex) {
        case 0: return "januari";
        case 1: return "februari";
        case 2: return "mars";
        case 3: return "april";
        case 4: return "maj";
        case 5: return "juni";    
        case 6: return "juli";
        case 7: return "augusti";
        case 8: return "september";
        case 9: return "oktober";
        case 10: return "november";
        case 11: return "december";
    }
}