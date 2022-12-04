const API_KEY = "3d683c9afc9b590561e9ead96047f97f";

function on(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather");
        weather.innerText = `위치 : ${data.name} 날씨 : ${data.weather[0].main} 온도 : ${data.main.temp}`;
    });
}

function off() {
    console.log("Can't find you.");
}
navigator.geolocation.getCurrentPosition(on, off)

