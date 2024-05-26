console.log("hello");

const API_KEY = [API_KEY];

function showWeatherInfo(data) {
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)}°C;`
    document.body.appendChild(newPara);
}

async function fetchWeatherdetails() {
    try {
        let city = "pune";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

        const data = await response.json();
        console.log("weather data: ", data);
        showWeatherInfo(data);
    } catch (err) {
        console.log("error found", err);
    }
}

async function getCustomWeather() {
    try {
        let latitude = 28.38;
        let longitude = 72.12;

        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        let data = await result.json();

        console.log(data);
        showWeatherInfo(data);
    } catch (err) {
        console.log("error found", err);
    }
}

fetchWeatherdetails();