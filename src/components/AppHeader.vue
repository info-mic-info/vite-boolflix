<script>

import { store } from '../store';
import AppContent from './AppContent.vue';
import axios from 'axios';

export default {
  components: {
    AppContent,
  },


  name: 'AppHeader',
  data() {
    return {
      store,
      searchText: '',
    }
  },

  methods: {
    search(input) {
      let apiCall = store.api + input;
      axios.get(apiCall).then((response) => {
        store.movieList = response.data.results
        console.log(store.movieList)
      })
    }

  }
}


</script>


<template lang="">
<h1 class="text-center">BoolFlix</h1>
<div class="container my-4">
        <div class="row">
            <div class="input-group mb-3">
                <input type="text" class="form-control shadow-none" placeholder="Inserisci un titolo" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="searchText" @keyup.enter="search(searchText)">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="search(searchText)">Cerca</button>
            </div>
        </div>
        <div>
            Ho trovato {{ store.movieList.length }} film
        </div>
        <div class="row row-cols-5 gap-5 justify-content-between">
            <AppContent v-for="(item, index) in store.movieList" :key="index" :movie="item" />
        </div>
    </div>
</template>



<style lang="scss" scoped>

</style>
