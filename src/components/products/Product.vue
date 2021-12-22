<template>
    <div class="team">
        <v-container class="my-3">
            <v-layout row wrap>
                <v-col xs12 sm6 md3>
                    <v-card
                        class="text-xs-center ma-3 card-prod"
                        tile
                        @mousedown="setProduct(item._id)"
                        @mouseup="$router.push(`/Product/${item._id}`)"
                    >
                        <v-responsive class="pt-4">
                            <v-img
                                :aspect-ratio="1"
                                contain
                                max-width="300px"
                                max-height="180px"
                                :src="item.url"
                            />
                        </v-responsive>
                        <v-card-text>
                            <div class="subheading">{{ item.name }}</div>
                            <div class="grey--text">
                                {{ item.massa }} - {{ item.price
                                }}{{ item.currency }}
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn
                                color="orange lighten-2"
                                text
                                v-on:mousedown.stop
                                v-on:mouseup.stop
                                @click="addToBasket(item)"
                            >
                                Добавить в корзину
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';

export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    methods: {
        ...mapMutations(['addToBasket', 'removeFromBasket']),
        ...mapActions(['setProduct']),
    },
};
</script>

<style scoped>
.team {
    margin-top: 30px;
    margin-left: 20px;
}
</style>
