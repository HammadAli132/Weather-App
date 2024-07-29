import sunny from '../assets/sun.png';
import partlyCloudy from '../assets/partly-cloudy.png';
import cloudy from '../assets/clouds.png';
import rain from '../assets/heavy-rain.png';
import storm from '../assets/storm.png';

let weatherObj = undefined;

class WEATHER {
    constructor () {
        this.day = undefined;
        this.date = undefined;
        this.temperature = undefined;
        this.humidity = undefined;
        this.windSpeed = undefined;
        this.resolvedAddress = undefined;
        this.description = undefined;
        this.icon = undefined;
    }

    set (jsonData) {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        this.day = days[new Date().getDay()];
        this.resolvedAddress = jsonData.resolvedAddress;
        this.description = jsonData.description;
        this.temperature = jsonData.currentConditions.temp;
        this.humidity = jsonData.currentConditions.humidity;
        this.windSpeed = jsonData.currentConditions.windspeed;
        this.icon = setIcon(jsonData.currentConditions.icon);
    }
};

class WEATHER_ARRAY {
    constructor () {
        this.weatherArray = [];
    }

    set (jsonData) {
        for (let i = 0; i < 7; i++) {
            this.weatherArray[i] = new WEATHER();
            this.weatherArray[i].date = jsonData.days[i + 1].datetime;
            this.weatherArray[i].description = jsonData.days[i + 1].description;
            this.weatherArray[i].temperature = jsonData.days[i + 1].temp;
            this.weatherArray[i].humidity = jsonData.days[i + 1].humidity;
            this.weatherArray[i].windSpeed = jsonData.days[i + 1].windspeed;
            this.weatherArray[i].icon = setIcon(jsonData.days[i + 1].icon);
        }
    }
};

function setIcon(weather) {
    switch (weather) {
        case 'clear-day':
        case 'clear-night':
            return sunny;
        case 'cloudy':
        case 'partly-cloudy-day':
        case 'partly-cloudy-night':
            return cloudy;
        case 'partly-cloudy-day':
            return partlyCloudy;
        case 'rain':
        case 'showers-day':
        case 'showers-night':
            return rain;
        case 'thunder-rain':
        case 'thunder-showers-day':
        case 'thunder-showers-night':
            return storm;
    }
}

let Data = undefined;

function initializeWeatherObj(jsonData) {
    weatherObj = new WEATHER ();
    weatherObj.set(jsonData);
    Data = jsonData;
    console.log(Data);
}

function getWeatherObj() { return weatherObj; }

function getWeatherArray() {
    let weatherArray = new WEATHER_ARRAY();
    weatherArray.set(Data);
    return weatherArray;
}

export {initializeWeatherObj, getWeatherObj, getWeatherArray};