<template>
    <v-container>
        <div v-if="$store.state.basket.count > 0">
            <v-row>
                <ProductBasket
                    v-for="item in $store.getters.getBasket"
                    :key="item._id"
                    v-bind:item="item"
                />
            </v-row>
            <div class="totalprice">
                <hr />
                <div>Итоговая стоимость ваших товаров: {{ totalPrice }}</div>
                <v-btn class="btn-totalprice">
                    Перейти к оплате
                </v-btn>
            </div>
        </div>

        <div v-else class="totalprice empty">
            <div class="emptytext">
                Корзина в данный момент пуста
            </div>
            <v-btn @click="$router.push(`/Product`)">
                Перейти к покупкам
            </v-btn>
        </div>
    </v-container>
</template>

<script>
import ProductBasket from '@/components/products/ProductBasket.vue';
export default {
    components: {
        ProductBasket,
    },
    computed: {
        totalPrice() {
            let total = 0;

            for (let item of this.$store.state.basket.basket) {
                total += item.totalPrice;
            }

            return total.toFixed(2);
        },
    },
};
</script>

<style>
.empty {
    display: flex;
    flex-direction: column;
}
.emptytext {
    padding: 20px;
    display: flex;
    justify-content: center;
}
.totalprice {
    margin-top: 60px;
    padding: 40px;
}
.btn-totalprice {
    top: 40px;
}
</style>
