<script>
import MainContent from './MainContent.vue';
import MainInput from './Maininput.vue';

 export default {
    name: "AppMain",
    components: {
        MainContent,
        MainInput
    },
    data() {

    }

 }
</script>

<template>
<main class="container">
    <MainInput />
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