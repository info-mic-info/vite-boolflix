<script>
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      store,
    };
  },
};
</script>


<template lang="">
    <AppHeader />
    
</template>


<style lang="scss">
@use "./styles/generals.scss";
</style>
