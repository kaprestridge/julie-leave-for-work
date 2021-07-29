var startTime = document.getElementById("startTime");
var valueSpan = document.getElementById("value");

startTime.addEventListener("input", function() {
  valueSpan.innerText = minusTime(startTime.value);
}, false);


const minusTime = (time) => {
    let timeArray = time.split(':')
    let hours = timeArray[0]
    let minutes = timeArray[1]
    let amOrPm = "am"
    if (timeArray[1] >= 45){
        minutes = timeArray[1] - 45
    } else {
        hours = timeArray[0] - 1
        minutes = parseInt(timeArray[1]) + 15
    }

    if (hours > 12){
        hours = hours - 12
        amOrPm = "pm"
    }

    if (minutes < 10){
        minutes = '0' + minutes
    }
    return (hours + ":" + minutes + " " + amOrPm)
}
