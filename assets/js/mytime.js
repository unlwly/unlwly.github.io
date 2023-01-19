function startTime() {
    var now = new Date();
    var formatter = new Intl.DateTimeFormat([], {
        timeZone: "Europe/Prague",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });
    var timeString = formatter.format(now);
    var h = timeString.split(":")[0];
    var m = timeString.split(":")[1];
    document.getElementById("time").innerHTML = h + ":" + m;
    setTimeout(startTime, 1000);
}
startTime();