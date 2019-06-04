function help() {
    var element = document.getElementById('help');
    if (element.style.opacity == 0) {
        element.style.opacity = "1";
        element.style.height = 400 + "px";
    } else {
        element.style.opacity = "0";
        element.style.height = "0";
    }
}
function register() {
    var element = document.getElementById('register');
    if (element.style.opacity == 0) {
        element.style.opacity = "1";
        element.style.height = 400 + "px";
    } else {
        element.style.opacity = "0";
        element.style.height = "0";
    }
}

function goHome(){
    location.replace("index.html");
}

function goSecond(){
    location.replace("second.html");
}