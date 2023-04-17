<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {

  },
  methods: {

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
