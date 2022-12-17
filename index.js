const title = document.getElementById("timeDisplay");

const dateOfBrith = new Date(2004, 10, 18, 5, 46, 0);

function tick() {
    let currentDate = new Date();
    var UpCounter = msToTime(Date.now() - dateOfBrith, currentDate);
    title.innerHTML = UpCounter.years + "j " + UpCounter.days + "d " + UpCounter.hours + "h " + UpCounter.minutes + "m " + UpCounter.seconds + "s"
}

function msToTime(duration, currentDate) {
    let second = Math.floor(duration / 1000);
    let minute = Math.floor(second / 60);
    second -= minute*60;
    let hour = Math.floor(minute / 60);
    minute -= hour*60;
    let day = Math.floor(hour / 24);
    hour -= day*24
    let year = currentDate.getFullYear() - dateOfBrith.getFullYear();
    day -= year*365;
    day -= Math.floor(year/4);

    let time = {years: year,days: day, hours: hour, minutes: minute, seconds: second};

    return time
}
setInterval(tick, 1000);