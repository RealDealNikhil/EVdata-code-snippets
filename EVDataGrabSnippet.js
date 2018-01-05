// Add id="carData" to the text element under g#highcharts-tooltip
// Prices and dates are stored as strings

var data;
var price;
var offset;
var oldDates = [];
var newDate;
var carData = [];
var repeater;
var clicked = false;

// scans a line graph
function getData() {
    data = document.getElementById("carData").childNodes;
    offset = data[0].innerHTML.indexOf('-') + 2;
    newDate = data[0].innerHTML.substring(offset);
    if (oldDates.indexOf(newDate) < 0) {
        oldDates.push(newDate);
        carData.push(
            {
                'price': data[1].innerHTML,
                'date': newDate
            });
        console.log(newDate);
        console.log(data[1].innerHTML);
        console.log(carData);
    }
    //repeater = setTimeout(getData, 1);
}

$(document).ready(function() {
    repeater = setInterval(getData, 1);
});

$("svg").on('click', function() {
    if (!clicked) {
        clearInterval(repeater);
        // save array of objects to a file
        var a = document.getElementById('trendPlot').appendChild(document.createElement("a"));
        a.download = "export.txt";
        a.href = "data:text/plain;base64," + btoa(JSON.stringify(carData));
        a.innerHTML = "Download Car Data";
        clicked = true;
    } else {
        console.log("Done");
    }
});
