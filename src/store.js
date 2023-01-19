import { reactive } from 'vue';

export const store = reactive({

    api_key: '8fceb60498ab15baa5013d20d778c17b',

    api: 'https://api.themoviedb.org/3/search/movie?api_key=8fceb60498ab15baa5013d20d778c17b&language=it-IT&query=',

    apiSerieTv: 'https://api.themoviedb.org/3/search/tv?api_key=8fceb60498ab15baa5013d20d778c17b&language=it-IT&query=',

    movieList: [],

    serieTvList: []


})
