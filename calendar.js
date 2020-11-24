let year = 2020;
let month = 11;

/** renders the calendar on the page */
function renderCalendar() {
    fetchDays();
    renderCurrentMonth();
}

/** shows previous month in the calendar */
function showPreviousMonth() {
    if(month == 01) {
        year--;
        month = 12;
    }
    else {
    month--;
    }
    renderCalendar();
}

/** shows next month in the calendar */
function showNextMonth() {
    if(month == 12) {
        year++;
        month = 01;
    }
    else {
    month++;
    }
    renderCalendar();
}

/** fetches an array of the days of the current month from the API */
function fetchDays() {
    $.ajax({
        url: `http://sholiday.faboul.se/dagar/v2.1/${year}/${month}`,
        type: "GET",
        dataType: "jsonp",
        success: function(response) {
            renderDays(response.dagar);
        }
    });
}

/** renders the calendar header that displays month and year */
function renderCurrentMonth() {
    let monthName = getMonthName(month);
    let currentMonth = document.getElementById("current-month");
    currentMonth.innerHTML = monthName + " " + year;
}

/** adds days to the calendar container */
function renderDays(daysInAMonth) {
    const container = document.getElementById("calendar-container");
    container.innerHTML = "";

    const dayDivs = createDayDivs(daysInAMonth);
    container.append(...dayDivs);
}

/** 
 * creates an array of divs of the days of the month 
 * containing the date and the name of the holiday if it is a holiday,
 * also adds empty divs if the month doesn't start on a monday
 */
function createDayDivs(days) { 
    const dayDivs = [];  
    const weekdayIndex = getWeekdayIndex(days[0].veckodag)

        for ( let i=0; i<weekdayIndex; i++ ) {
            const emptyDiv = document.createElement("div")
            emptyDiv.innerHTML = "";
            dayDivs.push(emptyDiv);
        }

    for (const day of days) {
        const dayDiv = document.createElement("div")

        let calendarTodos = getTodos (day.datum);
        //ATT FIXA: hämta todos för det aktuella datumet
        if (day.helgdag !== undefined) {
            dayDiv.innerHTML = day.datum.split("-")[2] + " " + day.helgdag;
            dayDiv.style.color = "red";
        }
        else {
            dayDiv.innerHTML = day.datum.split("-")[2];
        }
       if (calendarTodos.length > 0) {
            for ( let i=0; i<calendarTodos.length; i++ ) {
                let calendarTodoContainer = document.createElement("p")
                calendarTodoContainer.innerHTML = calendarTodos[i]
                dayDiv.appendChild(calendarTodoContainer);
            }
       }    
        dayDivs.push(dayDiv); 
    }
    return dayDivs;
}

/** creates an index for the first day of the month, depending on which weekday it is */
function getWeekdayIndex(weekday){
    switch(weekday) {
        case "Måndag": return 0;
        case "Tisdag": return 1;
        case "Onsdag": return 2;
        case "Torsdag": return 3;
        case "Fredag": return 4;
        case "Lördag": return 5;
        case "Söndag": return 6;
    }
}

/** converts the number of each month to its name */
function getMonthName(month) {
    switch(month) {
        case 01: return "Januari";
        case 02: return "Februari";
        case 03: return "Mars";
        case 04: return "April";
        case 05: return "Maj";
        case 06: return "Juni";
        case 07: return "Juli";
        case 08: return "Augusti";
        case 09: return "September";
        case 10: return "Oktober";
        case 11: return "November";
        case 12: return "December";       
    }
}


function getTodos(date) {
    calendarTodos = [];
    for (const todoItem of todoList) {
        if (todoItem.date === date) {
            calendarTodos.push(todoItem.title)
        }
    }   
    console.log(calendarTodos)
    return calendarTodos;
}