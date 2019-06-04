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

function carGo(){
    window.open("https://www.tesla.com");
}

function homeGo(){
    window.open("https://www.airbnb.co.kr/rooms/369034?search_id=4ce2e542-9e0e-becf-aa88-9cad62ad6e99&federated_search_id=c1d63e69-4e31-43dc-9253-93218941919d");
}