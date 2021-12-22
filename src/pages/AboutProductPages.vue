<template>
    <v-container>
        <v-row>
            <about-product v-bind:item="$store.getters.getProduct" />
        </v-row>
    </v-container>
</template>

<script>
import AboutProduct from '../components/products/AboutProduct.vue';

export default {
    components: { AboutProduct },
};
</script>

<style></style>
