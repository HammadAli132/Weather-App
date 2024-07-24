function getRequest(cityName) {
    return new Request(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}/today/next7days?unitGroup=us&key=CWUNNQ9A45KQA5YP6G6JEXHRD`, {mode: 'cors'});
}

async function fetchWeather(cityName) {
    const request = getRequest(cityName);

    try {
        const response = await fetch(request);
        if (!response.ok) {
            console.log(`HTTP Error: ${response.status}`);
            return;
        }
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(`Fetch Error: ${error}`);
    }
}

export default fetchWeather;