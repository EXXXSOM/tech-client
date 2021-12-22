import Vue from 'vue';

export default {
    state: {
        basket: [],
        count: 0,
    },
    mutations: {
        addToBasket(state, item) {
            let found = state.basket.find((product) => product._id == item._id);
            if (found) {
                found.quantity++;
                found.totalPrice = found.quantity * found.price;
            } else {
                state.basket.push(item);

                Vue.set(item, 'quantity', 1);
                Vue.set(item, 'totalPrice', item.price);
            }
            state.count++;
        },
        removeFromBasket(state, item) {
            let index = state.basket.indexOf(item);

            if (index > -1) {
                let product = state.basket[index];
                state.count -= product.quantity;

                state.basket.splice(index, 1);
            }
        },
    },
    getters: {
        getBasket(state) {
            return state.basket;
        },
        getCount(state) {
            return state.count;
        },
    },
    actions: {},
};
