var eventsData;
var timeDisplayEl = $('#time-display');

function setHourColors() {
    var now = dayjs();
    console.log("now.hour", now.hour())
    for (var i = 9; i < 22; i++) {
        if (i < now.hour()) {
            $("#hour-" + i).addClass("past");
        } else if (i == now.hour()) {
            $("#hour-" + i).addClass("present");    
        } else if (i > now.hour()){
            $("#hour-" + i).addClass("future");
        }
    }
}

function displayTime() {
    var rightNow = dayjs().format('MM/DD/YYYY')
    timeDisplayEl.text(rightNow);
  }

function loadStoredData() {
    eventsData = JSON.parse(localStorage.getItem("calendarEvents"));
    if (!eventsData) {
        eventsData = {
            hour9: "",
            hour10: "",
            hour11: "",
            hour12: "",
            hour13: "",
            hour14: "",
            hour15: "",
            hour16: "",
            hour17: "",
            hour18: "",
            hour19: "",
            hour20: "",
            hour21: "",
        };
    }
  $("#hour-9").children(".description").val(eventsData.hour9)
}

function handleSaveClick(event) {
    var hourBlock = $(event.target).parent();
    var value = hourBlock.children("textarea").val();
    var hour = hourBlock.attr('id').split("-")[1];

    eventsData["hour" + hour] = value;

    localStorage.setItem("calendarEvents", JSON.stringify(eventsData));
}

$(function () {
    displayTime();
    setHourColors();
    loadStoredData();
    $(".saveBtn").each(function(){
        $(this).on("click",handleSaveClick)
    })
    

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });