var dateToday = moment().format('MMMM Do YYYY');
var currentDay = moment().format('dddd');
var currentTime = moment().format('LT')
var timeHeader = $("#currentDay")
var header ="Today is " + currentDay + ", " + dateToday;
$(document).ready(function(){
    timeHeader.text(header)








});