<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from "./store";
import { getCards } from "./helpers";

export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return{
      store
    }
  },
  mounted() {
    getCards()
  },
}
</script>

<template>
  <div class="container">
    <AppHeader title="Yu-Gi-Oh! Api"/>
    <div v-if="store.loading" class="container">
      LOADING...
    </div>
    <AppMain v-else/>
  </div>
</template>

<style lang="scss">
@use "./styles/generals.scss";

.container {
  padding: 1rem;
}
</style>
