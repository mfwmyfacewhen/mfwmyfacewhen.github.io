try {
        function getIP(json) {
        
                document.write("<h1> Your public IP address is " + json.ip + "</h1>");
        }
}
catch (error) {
        document.write("<h1>Are you using UBlock? Naughty naughty</h1>")       
}
function osbrowserfunction () {
    let ua = navigator.userAgent;
    let finalOs = "";
    let finalBrowser = "";

    if (ua.includes('Windows')){
        finalOs="Windows";
    }
    else if (ua.includes('Android')){
        finalOs="Android";
    }
    else if (ua.includes('Mac') && navigator.maxTouchPoints > 1){
        finalOs="iOS";
    }
    else if (ua.includes('Mac')){
        finalOs="MacOS";
    }
    else if (ua.includes('CrOS')){
        finalOs="ChromeOS"
    }
    else if (ua.includes('Linux')){
        finalOs="Linux";
    }
    if (ua.includes('OPR')){
        finalBrowser="Opera";
    }
    else if (navigator.brave !== undefined){
        finalBrowser = "Brave"
    }
    else if (ua.includes('Firefox')){
         finalBrowser="Firefox";
     }
    else if (ua.includes('Edg')){
         finalBrowser="Edge";
     }
    else if (ua.includes('Chrome')){
        finalBrowser="Chrome";
     }
    else if (ua.includes('Safari')){
         finalBrowser="Safari";
     }
    document.write("<h1> You are running " + finalBrowser + " on " + finalOs + "</h1>");
}
osbrowserfunction();
let x = localStorage.getItem("visited");
if (x == "true") {
    document.write("<h1>Welcome back</h1>");
}
localStorage.setItem("visited", "true");
navigator.geolocation.getCurrentPosition((nav) => document.getElementById("location").innerHTML = `You are located at ${nav.coords.latitude}, ${nav.coords.longitude}`);
