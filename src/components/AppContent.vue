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

    UpperNationlAcronym() {
      let Upper_original_language = original_language.toUpperCase()
      return Upper_original_language

    }
  },
}



</script>


<template lang="">
 <div class="col card">
        <div class="card-body">
        <h5 class="card-title">
          Titolo: {{ movie.title }}</h5>
        </div>
        copertina: <img class="" :src="posterImage(movie)" >
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <div>
                    Titolo originale: {{ movie.original_title }}
                </div>
            </li>

            <img src="https://flagsapi.com/BE/flat/64.png">
       
            
             <p></p> Lingua originale:  {{ movie.UpperNationlAcronym(original_language)}}
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
