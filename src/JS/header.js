import fetchWeather from "./fetchWeather";

function uponFormSubmittion(event) {
    event.preventDefault();
    
    const searchBox = document.getElementById('location-search');
    const cityName = searchBox.value;
    if (cityName === "" || cityName === null) {
        alert("No City Name Entered. Try Again!");
        return;
    }
    searchBox.value = null;
    fetchWeather(cityName);
}

export default function getHeader() {
    const header = document.createElement('header');
    header.setAttribute('class', 'max-width');

    const siteTitle = document.createElement('span');
    siteTitle.id = 'site-title';
    siteTitle.innerText = 'Weather App';
    header.appendChild(siteTitle);

    const form = document.createElement('form');
    form.action = '#';

    const search = document.createElement('input');
    search.type = 'search';
    search.name = 'location';
    search.id = 'location-search';
    search.placeholder = 'Search Location';
    form.appendChild(search);

    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.id = 'search-btn';
    submit.setAttribute('class', 'animated-btn');
    submit.value = 'Search';
    form.appendChild(submit);
    form.addEventListener('submit', uponFormSubmittion);

    header.appendChild(form);

    return header;
}