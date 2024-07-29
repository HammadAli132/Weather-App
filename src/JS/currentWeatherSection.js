import { getWeatherObj } from "./weather";

export default function currentWeatherSection() {
    const weatherObj = getWeatherObj();

    const section = document.createElement('section');
    section.id = 'weather-today';

    const tempBox = document.createElement('div');
    tempBox.setAttribute('class', 'temp-box');

    const dayAndWeather = document.createElement('div');
    dayAndWeather.setAttribute('class', 'day-and-weather');

    const day = document.createElement('span');
    day.setAttribute('class', 'day');
    day.innerText = weatherObj.day;
    dayAndWeather.appendChild(day);

    const weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('class', 'weather-icon');
    weatherIcon.alt = 'Error';
    weatherIcon.src = weatherObj.icon;
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
    tempDesc.innerHTML = `${weatherObj.temperature} &deg;F`;
    temp.appendChild(tempDesc);
    list.appendChild(temp);

    const wind = document.createElement('li');
    wind.setAttribute('class', 'detail');
    const heading2 = document.createElement('span');
    heading2.setAttribute('class', 'detail-heading');
    heading2.innerText = 'Wind Speed: ';
    wind.appendChild(heading2);
    const windDesc = document.createElement('span');
    windDesc.innerHTML = `${weatherObj.windSpeed} MPH`;
    wind.appendChild(windDesc);
    list.appendChild(wind);

    const humidity = document.createElement('li');
    humidity.setAttribute('class', 'detail');
    const heading3 = document.createElement('span');
    heading3.setAttribute('class', 'detail-heading');
    heading3.innerText = 'Humidity: ';
    humidity.appendChild(heading3);
    const humidDesc = document.createElement('span');
    humidDesc.innerHTML = `${weatherObj.humidity}%`;
    humidity.appendChild(humidDesc);
    list.appendChild(humidity);

    const description = document.createElement('li');
    description.setAttribute('class', 'detail');
    const heading4 = document.createElement('span');
    heading4.setAttribute('class', 'detail-heading');
    heading4.innerText = 'Description: ';
    description.appendChild(heading4);
    const descDesc = document.createElement('span');
    descDesc.innerHTML = `${weatherObj.description}`;
    description.appendChild(descDesc);
    list.appendChild(description);

    tempBox.appendChild(dayAndWeather);
    tempBox.appendChild(list);

    section.appendChild(tempBox);

    return section;
}