export default function getMain() {
    const main = document.createElement('main');
    main.setAttribute('class', 'max-width');
    
    const heading = document.createElement('h1');
    heading.id = 'main-heading';
    heading.innerText = 'Weather In ';
    const cityName = document.createElement('span');
    cityName.id = 'city-name';
    cityName.innerText = 'Islamabad, Pakistan';
    heading.appendChild(cityName);

    main.appendChild(heading);

    return main;
}