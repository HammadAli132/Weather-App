import { getWeatherArray } from "./weather";

function getTempBox(arr, index) {
    const tempBox = document.createElement('div');
    tempBox.setAttribute('class', 'temp-box');

    const dayAndWeather = document.createElement('div');
    dayAndWeather.setAttribute('class', 'day-and-weather');

    const Date = document.createElement('span');
    Date.setAttribute('class', 'date');
    Date.innerText = arr.weatherArray[index].date;
    dayAndWeather.appendChild(Date);

    const weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('class', 'weather-icon');
    weatherIcon.alt = 'Error';
    weatherIcon.src = arr.weatherArray[index].icon;
    dayAndWeather.appendChild(weatherIcon);

    const list = document.createElement('ul');
    list.setAttribute('class', 'weather-details');

    const temp = document.createElement('li');
    temp.setAttribute('class', 'detail temperature');
    const heading1 = document.createElement('span');
    heading1.setAttribute('class', 'detail-heading');
    heading1.innerText = 'Temperature: ';
    temp.appendChild(heading1);
    const tempDesc = document.createElement('span');
    tempDesc.innerHTML = `${arr.weatherArray[index].temperature} &deg;F`;
    temp.appendChild(tempDesc);
    list.appendChild(temp);

    const wind = document.createElement('li');
    wind.setAttribute('class', 'detail');
    const heading2 = document.createElement('span');
    heading2.setAttribute('class', 'detail-heading');
    heading2.innerText = 'Wind Speed: ';
    wind.appendChild(heading2);
    const windDesc = document.createElement('span');
    windDesc.innerHTML = `${arr.weatherArray[index].windSpeed} MPH`;
    wind.appendChild(windDesc);
    list.appendChild(wind);

    const humidity = document.createElement('li');
    humidity.setAttribute('class', 'detail');
    const heading3 = document.createElement('span');
    heading3.setAttribute('class', 'detail-heading');
    heading3.innerText = 'Humidity: ';
    humidity.appendChild(heading3);
    const humidDesc = document.createElement('span');
    humidDesc.innerHTML = `${arr.weatherArray[index].humidity}%`;
    humidity.appendChild(humidDesc);
    list.appendChild(humidity);

    const description = document.createElement('li');
    description.setAttribute('class', 'detail');
    const heading4 = document.createElement('span');
    heading4.setAttribute('class', 'detail-heading');
    heading4.innerText = 'Description: ';
    description.appendChild(heading4);
    const descDesc = document.createElement('span');
    descDesc.innerHTML = `${arr.weatherArray[index].description}`;
    description.appendChild(descDesc);
    list.appendChild(description);

    tempBox.appendChild(dayAndWeather);
    tempBox.appendChild(list);

    return tempBox;
}

export default function weekWeatherSection() {
    const weatherArray = getWeatherArray();
    const section = document.createElement('section');
    section.id = 'week-weather';
    for (let i = 0; i < 7; i++) {
        let tempBox = getTempBox(weatherArray, i);
        section.appendChild(tempBox);
    }
    return section;
}