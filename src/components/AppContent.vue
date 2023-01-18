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

    UpperNationlAcronym(language) {

      return language.toUpperCase()

    },

    FlagsAcronymUppercase(language) {
      // 1°Metodo
      // if (language === 'en') {

      //   language = 'gb'
      // }

      // 2°Metodo
      switch (language) {

        default:
          break

        case 'en':
          language = 'gb'
          break;
      }

      return `https://flagsapi.com/${language.toUpperCase()}/flat/64.png`

    },
    RatingStars() {
      // Genera stelle piene
      let FullStars = Math.round(this.movie.vote_average / 2);
      let FullStarsArray = [];
      for (let i = 0; i < FullStars; i++) {
        FullStarsArray.push('fa-solid fa-star full');
      }
      // Genera stelle vuote
      let EmptyStars = 5 - FullStars
      for (let i = 0; i < EmptyStars; i++) {
        FullStarsArray.push('fa-regular fa-star empty');
      }
      return FullStarsArray

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
        copertina: <img class="" :src="posterImage(movie)" >
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <div>
                    Titolo originale: {{movie.title }}
                </div>
            </li>

            <img class="flag" :src="FlagsAcronymUppercase(movie.original_language)">
          
       
            
            Lingua originale:  {{UpperNationlAcronym(movie.original_language)}}
            <li class="list-group-item">
                <div>
                    Voto: {{ movie.vote_average }}
                  </div>
                  <i v-for="(item, index) in RatingStars()" :key="index" :class="item"></i>
            </li>
        </ul>
  </div>
</template>


<style lang="scss" scoped>
.flag {
  width: 40px
}

.full,
.empty {
  color: yellow;
}
</style>
