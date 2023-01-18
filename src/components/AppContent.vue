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
        return `https://image.tmdb.org/t/p/w342${value.poster_path}`
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


  <div class="card">    
<div class="image">
    <img :src="posterImage(movie)" >
  </div>
    
    
    <ul class="list-group list-group-flush">
         <li class="list-group-item info">
               <div class="info display-none">
               <p class=""> <strong>Titolo</strong>: {{ movie.title }}</p>
            <p><strong>Titolo originale</strong>: {{movie.title }}</p>
               <strong>Voto</strong>: <i v-for="(item, index) in RatingStars()" :key="index" :class="item"></i>
               <p><strong>Lingua originale</strong> :  {{UpperNationlAcronym(movie.original_language)}}
               <img class="flag " :src="FlagsAcronymUppercase(movie.original_language)"></p>
              </div>
           
          </li>
      </ul>
  </div>

</template>


<style lang="scss" scoped>
.flag {
  margin: auto 0;
  width: 40px
}


.display-none {
  display: none;

}

.image {

  img {
    width: 200px;
  }
}

.card {
  .img {

    position: relative;
  }

  &:hover {

    .info {
      padding: 50% 10px;
      height: 100%;
      width: 100%;
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      background-color: black;
      border: 1px solid red;
    }
  }
}

.full,
.empty {
  color: yellow;
}
</style>
