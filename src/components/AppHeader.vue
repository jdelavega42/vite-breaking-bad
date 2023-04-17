<script>
export default {
    name: "AppHeader",
    props: {
        title: String
    }
}
</script>

<template>
    <header class="row">
        <img src="../assets/Yugioh_Logo.webp" alt=""  class="col-1">
        <h1 class="col-11">{{ title }}</h1>
    </header>
</template>

<style lang="scss" scoped>
    img {
        object-fit: contain;
    }
</style>