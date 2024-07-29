import { getWeatherObj } from "./weather";
import currentWeatherSection from "./currentWeatherSection";
import weekWeatherSection from "./weekWeatherSection";

function addWeekWeather() {
    const main = document.querySelector('main');
    const nextWeekWeather = weekWeatherSection();
    main.appendChild(nextWeekWeather);
    const btn = document.getElementById('toggle-week-temp-view');
    btn.innerText = "Hide Next 7 Days' Forecast";
}

function removeWeekWeather() {
    const main = document.querySelector('main');
    main.removeChild(main.lastChild);
    const btn = document.getElementById('toggle-week-temp-view');
    btn.innerText = "View Next 7 Days' Forecast";
}

function updateMainSection() {
    let hideWeeklyWeather = false;
    const main = document.querySelector('main');
    while (main.childElementCount > 1) {
        main.removeChild(main.lastChild);
    }
    const weather = getWeatherObj();
    document.getElementById('city-name').innerText = weather.resolvedAddress;
    const todayWeather = currentWeatherSection();
    main.appendChild(todayWeather);

    const weekWeatherPreviewBtn = document.createElement('button');
    weekWeatherPreviewBtn.id = 'toggle-week-temp-view';
    weekWeatherPreviewBtn.setAttribute('class', 'animated-btn');
    weekWeatherPreviewBtn.innerText = "View Next 7 Days' Forecast";
    weekWeatherPreviewBtn.addEventListener('click', () => {
        if (!hideWeeklyWeather) {
            addWeekWeather();
            hideWeeklyWeather = true;
        }
        else {
            removeWeekWeather();
            hideWeeklyWeather = false;
        }
    });
    main.appendChild(weekWeatherPreviewBtn);
}

export {updateMainSection};

export default function getMain() {
    const main = document.createElement('main');
    main.setAttribute('class', 'max-width');
    
    const heading = document.createElement('h1');
    heading.id = 'main-heading';
    heading.innerText = 'Weather In ';
    const cityName = document.createElement('span');
    cityName.id = 'city-name';
    cityName.innerText = '???';
    heading.appendChild(cityName);

    main.appendChild(heading);

    return main;
}