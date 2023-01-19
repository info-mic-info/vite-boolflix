<script>
import { store } from "../store";

export default {
  name: "AppSeries",
  props: {
    series: Object,
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
        return `Nessun Copertina`;
      }
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
      }

      return `https://flagsapi.com/${language.toUpperCase()}/flat/64.png`;
    },

    RatingStars() {
      // Genera stelle piene
      let FullStars = Math.round(this.series.vote_average / 2);
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
    UpperNationlAcronym(language) {
      return language.toUpperCase();
    },
  },
};
</script>

        
<template lang="">

<div class="single-card"> 

        <img :src="posterImage(series)" >
        <ul class="info display-none">
          <li class="list-group-item ">
        <div class="description">
            <p class=""> <strong>Titolo</strong>: {{ series.original_name }}</p>
                  <p><strong>Trama</strong>: {{series.overview}}</p> 
                    <strong>Voto</strong>: <i v-for="(item, index) in RatingStars()" :key="index" :class="item"></i>
                    <p><strong>Lingua originale</strong> : {{UpperNationlAcronym(series.original_language)}} <img class="flag " :src="FlagsAcronymUppercase(series.original_language)"></p> 
              </div>
            </li>
     </ul>
      
</div>

   
</template>


<style lang="scss" scoped>
h1 {
  color: white;
}

.full,
.empty {
  color: yellow;
}
</style>