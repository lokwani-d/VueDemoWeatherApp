const api_key= "952183040e73d9027cbccdfccecc693c";
const url_base= 'https://api.openweathermap.org/data/2.5/';

async function getWeather(query) {

    const response = await fetch(`${url_base}weather?q=${query}&units=metric&APPID=${api_key}`)
    return response.json();
}

export default getWeather;