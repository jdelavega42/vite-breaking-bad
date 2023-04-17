<script>
export default {
    name: "ContentCard",
    props: {
        card: Object
    }
}
</script>

<template>
    <div class="card text-center">
        <img :src="card.card_images[0].image_url_small" alt="">
        <p class="card-name">{{ card.name }}</p>
        <p class="archetype"> {{ card.archetype }}</p>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.card {
    background-color: $primary-bg;
    height: 100%;
    .card-name {
        color: white;
    }
}
</style>