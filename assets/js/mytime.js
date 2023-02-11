function startTime() {
    var now = new Date();
    var formatter = new Intl.DateTimeFormat([], {
        timeZone: "Europe/Prague",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });
    var timeString = formatter.format(now);
    var [h, m] = timeString.split(":");
    document.getElementsByClassName("time")[0].innerHTML = h + ":" + m;
    setTimeout(startTime, 1000);
}
startTime();