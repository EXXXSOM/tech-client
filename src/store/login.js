import api from '../api.js';
export default {
    state: {
        auth: false,
    },
    mutations: {
        login: (state, data) => {
            if (data.response) {
                if (data.response.status === 200) {
                    state.auth = data.response.data;
                }
            }
        },
        logout(state) {
            state.auth = false;
        },
    },
    actions: {
        login: async (context, payload) => {
            const response = await api.login(
                payload.name,
                payload.email,
                payload.password
            );

            context.commit('login', { response, payload });
        },
    },
    getters: {
        getAuth(state) {
            return state.auth;
        },
    },
};
