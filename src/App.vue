<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from "axios";
import { store } from "./store";

export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {

  },
  data() {
    return{
      store
    }
  },
  mounted() {
    store.loading = true;
    axios.get(store.apiURL).then((resp) => {
      console.log(resp.data.data);
      this.store.cards = resp.data.data
    });
    store.loading = false;
  }
}
</script>

<template>
  <div class="container">
    <AppHeader title="Yu-Gi-Oh! Api"/>
    <AppMain />
  </div>
</template>

<style lang="scss">
@use "./styles/generals.scss";

.container {
  padding: 1rem;
}
</style>
