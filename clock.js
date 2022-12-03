const clock = document.querySelector("#clock");

function date() {
    const day = new Date();
    clock.innerText = `${day.getFullYear()}년 ${day.getHours()}시 ${day.getMinutes()}분 ${day.getSeconds()}초`;
}

date();
setInterval(date, 1000);