<script>
import { store } from '../store';

export default {
    name: "MainInput",
    emits: ["filter"],
    data() {
        return {
            archetypeOptions: ["Alien", "Ally of Justice", "Ancient Gear"],
            store
        }
    }
}
</script>

<template>
        <select name="archetype" id="archetype" class="form-select" aria-label="Default select example" v-model="store.selectedArchetype" @change="$emit('filter')">
            <option value="" selected>All</option>
            <option :value="archetype" v-for="(archetype,index) in archetypeOptions" :key="index">{{ archetype }}</option>
        </select>
</template>

<style lang="scss" scoped>
</style>