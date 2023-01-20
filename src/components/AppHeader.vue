<script>
import { store } from "../store";
import AppContent from "./AppContent.vue";
import axios from "axios";

import AppSeries from "./AppSeries.vue";

export default {
  components: {
    AppContent,
    AppSeries,
  },

  name: "AppHeader",
  data() {
    return {
      store,
      searchText: "",
    };
  },

  methods: {
    search(input) {
      let apiCall = store.api + input;
      axios.get(apiCall).then((response) => {
        store.movieList = response.data.results;
        console.log(`Questi sono i film -->${store.movieList}`);
        console.log(`Questi sono i film -->${apiCall}`);
      });
    },

    searchSeriesTv(input2) {
      console.log("check");
      let apiCallSeries = store.apiSerieTv + input2;
      axios.get(apiCallSeries).then((response) => {
        store.serieTvList = response.data.results;
        console.log(response);
        console.log(`Questi sono le serieTv -->${store.serieTvList}`);
        console.log(`Questi sono le serieTv -->${apiCallSeries}`);
      });
    },
    GlobalSearch(input3) {
      console.log("chek");
      this.search(input3);
      this.searchSeriesTv(input3);
    },
  },
};
</script>

<template lang="">
  
  <header class="d-flex justify-content-between">
  <!-- HEADER PARTE DX-->
  <!-- --------------------------------------------------- -->
   
  
  <div class="container-fluid d-flex ">

      <img src="../assets/Netflix-Official-Logo.png" alt="">
      <ul class="list-group-item d-flex margin-auto">
      <li><a href="">Home</a></li>
       <li><a href="">Serie TV</a></li>
       <li><a href="">Film</a></li>
       <li><a href="">Originali</a></li>
       <li><a href="">Aggiunti di recente</a></li>
       <li><a href="">La mia lista</a></li>
       
<a href=""></a>

    </ul>

  </div>

  <!-- HEADER PART SX -->
<!-- --------------------------------------------------- -->

    <div class="container d-flex justify-content-end my-4 ">
      <div class="row margin-auto">
        <div class="input-group margin-auto ">
          <input type="text" class="form-control shadow-none ligthgray" placeholder="Inserisci un titolo" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="searchText" @keyup.enter="GlobalSearch(searchText)">
          <button class="btn btn-outline-secondary " type="button" id="button-addon2" @click="GlobalSearch(searchText)">Cerca</button>
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



<!-- CICLO FILM -->
<!-- -------------------------------------------------- -->
        <div class="container-fluid">
            <p class="ms-3"> Ho trovato <strong>{{ store.movieList.length }} </strong> film</p>
        </div>
        <div class="d-flex scroll">
            <AppContent v-for="(item, index) in store.movieList" :key="index" :movie="item" />
        </div>


<!-- CICLO SERIE TV -->
<!-- -------------------------------------------------- -->
      <div class="container-fluid mt-4 ">
        <p class="ms-3"> Ho trovato <strong>{{ store.serieTvList.length }} </strong> Serie Tv</p>
      </div>
        <div class="d-flex scroll">
            <AppSeries v-for="(item2, index2) in store.serieTvList" :key="index2" :series="item2" />
            
        </div>
      

<!-- -------------------------------------------------- -->




    
</template>



<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

header {
  background: black;
  color: $lightgreycolor;

  img {
    width: 150px;
  }
}

strong {
  color: $redcolor;
}

p {
  color: $lightgreycolor;
}

.ligthgray {
  background-color: $lightgreycolor;
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
  scrollbar-color: $redcolor;
}

a {
  text-decoration: none;
  color: white;

  &:hover {
    border-bottom: 4px solid $redcolor;
  }
}
</style>
