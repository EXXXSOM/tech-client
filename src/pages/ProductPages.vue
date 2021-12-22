<template>
    <v-container>
        <v-row>
            <Product
                v-for="item in $store.getters.getTeam"
                :key="item._id"
                v-bind:item="item"
            />
        </v-row>
    </v-container>
</template>

<script>
import Product from '@/components/products/Product.vue';
import { mapMutations } from 'vuex';
export default {
    components: { Product },
    created() {
        this.getItems();
    },
    methods: {
        ...mapMutations(['getItems']),
    },
};
</script>

<style></style>
