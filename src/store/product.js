import api from '../api.js';
export default {
    state: {
        team: [],
        oneProduct: {},
    },
    mutations: {
        setProduct: (state, data) => {
            if (data.response) {
                if (data.response.status === 200) {
                    state.oneProduct = data.response.data;
                }
            }
        },
        getItems(state) {
            var products = [];
            api.getProducts().then((res) => {
                products = res.data;
                state.team = products;
            });
        },
    },
    actions: {
        setProduct: async (context, payload) => {
            const response = await api.getProduct(payload);

            context.commit('setProduct', { response, payload });
        },
    },
    getters: {
        getTeam(state) {
            return state.team;
        },
        getProduct(state) {
            return state.oneProduct;
        },
    },
};
