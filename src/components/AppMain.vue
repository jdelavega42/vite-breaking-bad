<script>
import MainContent from './MainContent.vue';
import MainInput from './MainInput.vue';
import { store } from '../store';
import { getCards } from '../helpers';

 export default {
    name: "AppMain",
    components: {
        MainContent,
        MainInput
    },
    data() {
        return store
    },
    methods: {
        handleFilter() {
            getCards()
        }
    }
 }
</script>

<template>
<main class="container">
    <MainInput @filter="handleFilter" />
    <MainContent />
</main>
  
</template>

<style lang="scss" scoped>
@use "../styles/generals.scss";
@use "../styles/partials/variables.scss" as *;
    main {
        background-color: $primary-bg;
    }

</style>