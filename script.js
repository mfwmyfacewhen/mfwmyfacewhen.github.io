navigator.sendBeacon("https://gallery.zerolimits.dev", "poop");
document.addEventListener("click", pasteIt);
function pasteIt() {
    navigator.permissions.query({name: "clipboard-read"}).then((result) => {
            console.log(result.state)
            if (result.state == 'granted') {
        navigator.clipboard.readText().then(
            (clipText) =>  document.getElementById("clip").innerText = clipText);
      } else if (result.state == 'prompt') {
        document.getElementById("clip").innerText = "can i has perm plz";
      } else {
        throw new Error("Not allowed to read clipboard.");
    }
    });

}

function getIP(json) {
        document.getElementById("ip").innerHTML = "Your public IP address is " + json.ip;
}
function ublock() {
        console.log(document.getElementById("ip").innerHTML);
        if (document.getElementById("ip").innerHTML == "")
                document.getElementById("ublock").innerHTML = "Are you using UBlock? Naughty naughty";
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
        document.getElementById("os").innerHTML = "You are running " + finalBrowser + " on " + finalOs;
}
osbrowserfunction();
let x = localStorage.getItem("visited");
if (x == "true") {
    document.getElementById("cookie").innerHTML = "Welcome back";
}
localStorage.setItem("visited", "true");
navigator.geolocation.getCurrentPosition((nav) => document.getElementById("location").innerHTML = `You are located at ${nav.coords.latitude}, ${nav.coords.longitude}`);
