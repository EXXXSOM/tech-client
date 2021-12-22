<template>
    <v-container>
        <div class="aboutprod">
            <v-row no-gutters>
                <v-spacer />
                <v-col cols="5">
                    <v-img
                        :aspect-ratio="1"
                        contain
                        max-width="400px"
                        max-height="300px"
                        :src="item.url"
                /></v-col>
                <v-spacer />
                <v-col cols="5" class="textabout">
                    <v-card-title>Наименование : {{ item.name }}</v-card-title>
                    <v-card-title
                        >Цена за {{ item.massa }} : {{ item.price
                        }}{{ item.currency }}
                    </v-card-title>
                    <v-btn
                        class="mr-4 addButton"
                        v-on:mousedown.stop
                        v-on:mouseup.stop
                        @click="addToBasket(item)"
                    >
                        Добавить в корзину
                    </v-btn>
                </v-col>
                <v-spacer />
            </v-row>
        </div>
    </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    methods: {
        ...mapGetters(['getProduct']),
        ...mapMutations(['addToBasket', 'setProduct']),
    },
};
</script>

<style scoped>
.aboutprod {
    margin-top: 100px;
}
.addButton {
    margin-top: 60px;
}
.textabout {
    font-family: unquote('Roboto');
    font-size: 13px;
}
</style>
