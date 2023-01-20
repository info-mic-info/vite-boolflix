<script>
import { store } from "../store";

export default {
  name: "AppContent",
  props: {
    movie: Object,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    //Funzione inserire il path dell'immagine di copertina
    posterImage(value) {
      if (value.poster_path) {
        return `https://image.tmdb.org/t/p/w342${value.poster_path}`;
      } else {
        return "https://t4.ftcdn.net/jpg/02/12/52/91/360_F_212529193_YRhcQCaJB9ugv5dFzqK25Uo9Ivm7B9Ca.jpg";
      }
    },

    UpperNationlAcronym(language) {
      return language.toUpperCase();
    },

    FlagsAcronymUppercase(language) {
      // 1°Metodo
      // if (language === 'en') {

      //   language = 'gb'
      // }

      // 2°Metodo
      switch (language) {
        default:
          break;

        case "en":
          language = "gb";
          break;

        case "ja":
          language = "jp";
          break;
      }

      return `https://flagsapi.com/${language.toUpperCase()}/flat/64.png`;
    },
    RatingStars() {
      // Genera stelle piene
      let FullStars = Math.round(this.movie.vote_average / 2);
      let FullStarsArray = [];
      for (let i = 0; i < FullStars; i++) {
        FullStarsArray.push("fa-solid fa-star full");
      }
      // Genera stelle vuote
      let EmptyStars = 5 - FullStars;
      for (let i = 0; i < EmptyStars; i++) {
        FullStarsArray.push("fa-regular fa-star empty");
      }
      return FullStarsArray;
    },
  },
};
</script>


<template lang="">


   <div class="single-card"> 

      <div class="image">


      </div>
      
      <img :src="posterImage(movie)" >
      <ul class="info display-none">
          <li class="list-group-item ">
               <div class="description">
                  <p class=""> <strong>Titolo</strong>: {{ movie.title }}</p>
                      <p><strong>Titolo originale</strong>: {{movie.title }}</p>
                  <p><strong>Trama</strong>: {{movie.overview}}</p> 
                    <strong>Voto</strong>: <i v-for="(item, index) in RatingStars()" :key="index" :class="item"></i>
                  <p><strong>Lingua originale</strong> :  {{UpperNationlAcronym(movie.original_language)}}
                  <img class="flag " :src="FlagsAcronymUppercase(movie.original_language)"></p>
             </div>
         </li>
     </ul>
      
    
 </div>

</template>


<style lang="scss" >
@use "../styles/partials/variables" as *;

.flag {
  margin: auto 0;
  width: 40px;
}

.display-none {
  display: none;
}

strong {
  color: $redcolor;
}

.single-card {
  width: 100%;
  margin: 10px;
}

.single-card {
  position: relative;

  &:hover {
    .info {
      font-size: 12px;
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      background-color: black;
      opacity: 0.9;
      border: 1px solid $redcolor;
      border-radius: 10px;
    }
  }
}

.description {
  width: 100%;
  padding: 5px;
}

img {
  border-radius: 10px;
}

.full,
.empty {
  color: yellow;
}
</style>
