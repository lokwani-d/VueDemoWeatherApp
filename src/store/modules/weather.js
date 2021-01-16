
const api_key= "952183040e73d9027cbccdfccecc693c";
const url_base= 'https://api.openweathermap.org/data/2.5/';

const state ={

    weather: []
};

const getters = {
    weathers: state=> state.weather
};

const actions ={

    async  getWeather({commit}){
        const response = await fetch(`${url_base}weather?q=${commit}&units=metric&APPID=${api_key}`)
        console.log(response.json())
        commit('fetchWeather', response.json())
    }
};

const mutations ={

    fetchWeather: (state, weather) => (state.weather = weather)
};

export default {
    state,
    getters,
    actions,
    mutations
}