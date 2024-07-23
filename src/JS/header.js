export default function getHeader() {
    const header = document.createElement('header');

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
    submit.value = 'Search';
    form.appendChild(submit);

    header.appendChild(form);

    return header;
}