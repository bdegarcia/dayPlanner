var dateToday = moment().format('MMMM Do YYYY');
var currentDay = moment().format('dddd');
var timeHeader = $("#currentDay")
var currentHour = moment().format('H')
var scheduleDiv = $('#schedule');
var header ="Today is " + currentDay + ", " + dateToday;


$(document).ready(function(){
    timeHeader.text(header);
    // console.log(todayItems);

    function colorChange(timeRow, hour){
        if (hour > currentHour){
            timeRow.addClass("future")
        } else if (hour < currentHour){
            timeRow.addClass("past")
        } else if (hour === currentHour){
            timeRow.addClass("present")
        };
    };
    for(var hour = 9; hour < 19; hour++){
        let index = hour - 9 ;
        let newRow = $('<div>');
        let timeDisp = $('<div>');
        let inputDiv = $('<div>');
        let planInput = $('<input>');
        let saveBtn = $('<div>')
// creating the row, and giving it an index to reference
        newRow.addClass('row');
        newRow.attr('index', index);
// creating the time column
        timeDisp.addClass('col-sm-2 time');
        newRow.append(timeDisp);
// creating the time that is displayed
        let timeDisplay = 0;
        let ampm = "";
        if (hour > 12) { 
          timeDisplay = hour - 12;
          ampm = "pm";
        } else {
          timeDisplay = hour;
          ampm = "am";
        };
        timeDisp.text(timeDisplay + ampm);
// creating the input, and assigning an ID based on the index we are at. as well as putting any variables that might have been in local storage
        planInput.attr('id',`input-${index}`);
        planInput.attr('class', 'input');
        planInput.attr('index', index);
        planInput.val(localStorage.getItem("saveid-" + index));
// inserting the input into the col div, and giving it width
        inputDiv.addClass('col-sm-9 inputDiv');
        newRow.append(inputDiv);
        inputDiv.append(planInput);
// inserting the save button, and giving it the index to reference
        saveBtn.addClass("saveBtn col-sm-1 far fa-save saveIcon")
        saveBtn.attr('id',`saveid-${index}`);
        saveBtn.attr('saveBtn-id',index);
        newRow.append(saveBtn);
// officially appending each row to the main div
        scheduleDiv.append(newRow);
// changing the color of the row
        colorChange(newRow, hour);
    };

    if(!$("#input-3").val()){
        $("#input-3").val("Eat Lunch");
    };

    $(document).on('click','.saveBtn', function(event) {
        event.preventDefault(); 
        var toDoInput = $(this).siblings(".inputDiv").children("input").val();
        var toDoHour = $(this).attr('id');
        console.log(toDoHour);

        localStorage.setItem(toDoHour, toDoInput);
    });
});