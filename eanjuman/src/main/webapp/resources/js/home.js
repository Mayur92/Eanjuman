function startTime() {
    var today = new Date();
    var dt = today.getDate();
    var mth = today.getMonth();
    var day = today.getDay();
    var year = today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('currentDate').innerHTML =
   "Today is : "+day+" "+dt+"-"+ mth + "-" + year + " "+  h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
