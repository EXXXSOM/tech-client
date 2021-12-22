<template>
    <v-container fluid>
        <v-app-bar color="white" dark app>
            <v-tab>
                <router-link tag="li" class="col" class-active="active" to="/"
                    >Главная</router-link
                >
            </v-tab>
            <v-tab>
                <router-link
                    tag="li"
                    class="col"
                    class-active="active"
                    to="/Product"
                    >Каталог товаров</router-link
                >
            </v-tab>
            <v-tab>
                <router-link
                    tag="li"
                    class="col"
                    class-active="active"
                    to="/Feedback"
                    >Связаться с нами</router-link
                >
            </v-tab>
            <v-tab v-if="$store.getters.getAuth">
                <router-link
                    tag="li"
                    class="col"
                    class-active="active"
                    to="/Admin"
                    >Админка</router-link
                >
            </v-tab>
            <v-tab v-if="$store.getters.getAuth">
                <router-link
                    tag="li"
                    class="col"
                    class-active="active"
                    to="/Files"
                    >Файлы на сервере</router-link
                >
            </v-tab>

            <v-spacer></v-spacer>
            <v-btn icon>
                <router-link
                    tag="li"
                    class="col"
                    class-active="active"
                    to="/Basket"
                >
                    <v-icon
                        v-if="$store.state.basket.count == 0"
                        color="blue-grey darken-4"
                        >mdi-basket</v-icon
                    >
                    <div v-else>
                        <v-icon color="blue darken-3">mdi-basket </v-icon>
                        <v-badge dot left overlap></v-badge>
                    </div>
                </router-link>
            </v-btn>
            <v-tab v-if="!$store.getters.getAuth">
                <router-link
                    tag="li"
                    class="col"
                    class-active="active"
                    to="/Login"
                    >Вход</router-link
                >
            </v-tab>
            <v-tab v-if="$store.getters.getAuth" @click="logout()">
                <router-link
                    tag="li"
                    class="exit"
                    class-active="active"
                    to="/Login"
                    >Выход</router-link
                >
            </v-tab>
        </v-app-bar>
    </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    methods: {
        ...mapMutations(['logout']),
        ...mapGetters(['getAuth']),
    },
};
</script>

<style>
li {
    list-style-type: none;
}
li:hover,
li.router-link-active,
li.router-link-exact-active {
    text-decoration: underline #212a3d;
}

li {
    color: #212a3d;
}
</style>
