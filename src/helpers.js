import { store } from "./store";
import axios from "axios";

function getCards() {
    const params = {num: 50, offset:0};
    if(store.selectedArchetype) {
        params.archetype = store.selectedArchetype;
    };
    store.loading = true;
    axios.get(store.apiURL, { params }).then((resp) => {
    store.cards = resp.data.data;
    store.loading = false;
})
}

export {
    getCards
}