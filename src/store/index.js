import Vuex from 'vuex';
import Vue from 'vue';
import weather from './modules/weather'

//Loading my Vuex
Vue.use(Vuex);

//Creating my store
export default new Vuex.Store({
    modules: {
        weather
    }
});
