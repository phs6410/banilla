const clock = document.querySelector("#clock");

function date() {
    const day = new Date();
    const hours = String(day.getHours()).padStart(2, "0");
    const minutes = String(day.getMinutes()).padStart(2, "0");
    const seconds = String(day.getSeconds()).padStart(2, "0");
    clock.innerText = `${day.getFullYear()}λ ${hours}μ ${minutes}λΆ ${seconds}μ΄`;
}

date();
setInterval(date, 1000);