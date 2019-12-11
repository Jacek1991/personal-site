const now = new Date();

document.getElementById("age").innerHTML = now.getFullYear()-1991;

function clock(){

    var now = new Date();
    var hours = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    if (hours < 10) hours = "0" + hours;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    document.getElementById("clock").innerHTML = "Aktualny czas: " + hours + ":" + min + ":" + sec;

    setTimeout("clock()", 1000);
}
