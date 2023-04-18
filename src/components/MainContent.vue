<script>
    import ContentCard from './ContentCard.vue';
    import { store } from '../store';
    
    export default {
        name: "MainContent",
        components: {
            ContentCard
        },
        data() {
            return {
                store
            }
        },
    }
</script>

<template>
    <main class="container p-5 bg-light">
        <div class="heading">Found {{ store.cards.length }} cards </div>
        <div class="row row-cols-5 g-2">
            <div v-for="card in store.cards" :key="card.id" class="col">
                    <ContentCard :card="card" />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {  

    .heading {
        background-color: #212529;
        color: white;
        padding: 1rem;
    }
    .row {
        margin: 0;
    }
}
</style>