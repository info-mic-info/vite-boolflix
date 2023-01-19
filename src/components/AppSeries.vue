<script>
import { store } from '../store';

export default {
    name: 'AppSeries',
    props: {
        series: Object,
    },
    data() {
        return {
            store
        }
    },
}
</script>

        
<template lang="">
    <div>
        <h1>Serie Tv</h1>
        <h1>{{store.serieTvList}}</h1>
    </div>
</template>


<style lang="scss" scoped>
h1 {
    color: white
}
</style>