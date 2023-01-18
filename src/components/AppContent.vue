<script>
import { store } from '../store';

export default {
  name: 'AppContent',
  props: {
    movie: Object,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    //Funzione inserire il path dell'immagine di copertina
    posterImage(value) {
      if (value.poster_path) {
        return `https://image.tmdb.org/t/p/w300${value.poster_path}`
      }
      else {
        return `Nessun Copertina`
      }
    },
  }
}

</script>


<template lang="">
 <div class="col card">
        <div class="card-body">
        <h5 class="card-title">
          Titolo: {{ movie.title }}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <div>
                    Titolo originale: {{ movie.original_title }}
                </div>
            </li>
       
            copertina: <img class="" :src="posterImage(index)" :alt="title(index)">
            
            Lingua originale: {{ movie.original_language }}
            <li class="list-group-item">
                <div>
                    Voto: {{ movie.vote_average }}
                </div>
            </li>
        </ul>
  </div>
</template>


<style lang="">
  
</style>
