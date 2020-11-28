window.addEventListener("load", main)

const date = new Date ();
let year = date.getFullYear();
let month = date.getMonth() + 1;



function main() {
    addEventListeners();
    getTodosFromLocalStorage()
    showClock();   
    renderTodos();
    renderCalendar();
}

function addEventListeners() {
    const submitButton = document.getElementById("submit-button")
    submitButton.onclick = addNewTodo;

    const previousMonthIcon = document.getElementById("previous-month-icon");
    previousMonthIcon.addEventListener("click", showPreviousMonth);

    const nextMonthIcon = document.getElementById("next-month-icon");
    nextMonthIcon.addEventListener("click", showNextMonth);

    const closeActiveDayIcon = document.getElementById("close-active-day-icon");
    closeActiveDayIcon.addEventListener("click", closeActiveDay);
}

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
        case 0: return "Sön";
        case 1: return "Mån";
        case 2: return "Tis";
        case 3: return "Ons";
        case 4: return "Tor";
        case 5: return "Fre";
        case 6: return "Lör";
    }
}

function getMonth (date) {
    const monthIndex = date.getMonth();
    switch(monthIndex) {
        case 0: return "jan";
        case 1: return "feb";
        case 2: return "mar";
        case 3: return "apr";
        case 4: return "maj";
        case 5: return "jun";    
        case 6: return "jul";
        case 7: return "aug";
        case 8: return "sep";
        case 9: return "okt";
        case 10: return "nov";
        case 11: return "dec";
    }
}