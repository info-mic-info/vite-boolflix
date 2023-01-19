<script>

import { store } from '../store';
import AppContent from './AppContent.vue';
import axios from 'axios';

import AppSeries from './AppSeries.vue';

export default {
  components: {
    AppContent,
    AppSeries
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
    },

    searchSeriesTv(input2) {
      let apiCallSeries = store.api + input2;
      axios.get(apiCallSeries).then((response) => {
        store.serieTvList = response.data.results
      })
    }
  }
}


</script>

<template lang="">
  
  <header class="d-flex justify-content-between">
  <!-- HEADER PARTE DX-->
  <!-- --------------------------------------------------- -->
   
  
  <div class="container-fluid d-flex ">

      <img src="../assets/Netflix-Official-Logo.png" alt="">
      <ul class="list-group-item d-flex margin-auto">
      <li>Home</li>
       <li>Serie TV</li>
       <li>Film</li>
       <li>Originali</li>
       <li>Aggiunti di recente</li>
       <li>La mia lista</li>
    </ul>

  </div>

  <!-- HEADER PART SX -->
<!-- --------------------------------------------------- -->

    <div class="container d-flex justify-content-end my-4 ">
      <div class="row margin-auto">
        <div class="input-group margin-auto ">
          <input type="text" class="form-control shadow-none " placeholder="Inserisci un titolo" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="searchText" @keyup.enter="search(searchText)">
          <button class="btn btn-outline-secondary " type="button" id="button-addon2" @click="search(searchText)">Cerca</button>
        </div>
      </div>




      <ul class="d-flex margin-auto ">
      <li> <p>BAMBINI</p></li>
        <li><i class="fa-solid fa-bell"></i></li>
          <li><i class="fa-solid fa-user"></i></li>
            <li><i class="fa-solid fa-caret-down"></i></li>
     </ul>
          </div>
      
<!-- -------------------------------------------------- -->
</header>
        <div class="container-fluid">
            <p> Ho trovato <strong>{{ store.movieList.length }} </strong> film</p>
        </div>


        <div class="d-flex scroll">
            <AppContent v-for="(item, index) in store.movieList" :key="index" :movie="item" />
        </div>

<AppSeries/>

    
</template>



<style lang="scss" scoped>
header {
  background: black;
  color: lightgray;

  img {
    width: 150px
  }
}

strong {
  color: red;
}

p {
  color: lightgrey;
}

li {
  margin: 0 10px;
}

.margin-auto {
  margin: auto 0;
}

li p {
  margin: auto 0;
}

.scroll {
  overflow-x: scroll;
  scrollbar-color: red;
}
</style>
