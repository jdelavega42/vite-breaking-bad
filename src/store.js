import {reactive} from "vue";
export const store = reactive({
    cards: [],
    apiURL:"https://db.ygoprodeck.com/api/v7/cardinfo.php",
    loading: false,
    selectedArchetype: ""
});