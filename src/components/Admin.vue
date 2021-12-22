<template>
    <v-container>
        <h2>Добавление товара</h2>
        <validation-observer ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="submit">
                <validation-provider v-slot="{ errors }" name="Name" required>
                    <v-text-field
                        v-model="name"
                        :error-messages="errors"
                        label="Название товара"
                        required
                    ></v-text-field>
                </validation-provider>
                <validation-provider v-slot="{ errors }" name="price">
                    <v-text-field
                        v-model="price"
                        :error-messages="errors"
                        label="Цена"
                        required
                    ></v-text-field>
                </validation-provider>
                <validation-provider v-slot="{ errors }" name="massa">
                    <v-text-field
                        v-model="massa"
                        :error-messages="errors"
                        label="Масса"
                        required
                    ></v-text-field>
                </validation-provider>
                <validation-provider v-slot="{ errors }" name="currency">
                    <v-text-field
                        v-model="currency"
                        :error-messages="errors"
                        label="Валюта"
                        required
                    ></v-text-field>
                </validation-provider>

                <validation-provider
                    v-slot="{ errors }"
                    name="url"
                    rules="required"
                >
                    <v-text-field
                        v-model="url"
                        :error-messages="errors"
                        label="Ссылка на картинку"
                        required
                    ></v-text-field>
                </validation-provider>

                <v-btn class="mr-4" type="submit" :disabled="invalid">
                    Отправить
                </v-btn>
            </form>
        </validation-observer>
        <v-simple-table class="table">
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left" style="width:5%">
                            Название
                        </th>
                        <th class="text-left" style="width:5%">
                            Цена
                        </th>
                        <th class="text-left" style="width:5%">
                            Масса
                        </th>
                        <th class="text-left" style="width:5%">
                            Валюта
                        </th>
                        <th class="text-left" style="width:80%">
                            Ссылка
                        </th>
                        <th class="text-left" style="width:5%">
                            Обновить
                        </th>
                        <th class="text-left" style="width:5%">
                            Удалить
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in products" :key="item._id">
                        <td><input class="" v-model="item.name" /></td>
                        <td><input class="" v-model="item.price" /></td>
                        <td><input class="" v-model="item.massa" /></td>
                        <td><input class="" v-model="item.currency" /></td>
                        <td><input class="inp" v-model="item.url" /></td>
                        <td>
                            <v-btn type="submit" @click="updateProduct(item)">
                                <v-icon color="blue-grey darken-4"
                                    >mdi-package-up</v-icon
                                >
                            </v-btn>
                        </td>
                        <td>
                            <v-btn @click="deleteProduct(item._id)">
                                <v-icon color="blue-grey darken-4"
                                    >mdi-delete-forever</v-icon
                                >
                            </v-btn>
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-container>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import api from '../api.js';

export default {
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    data: () => ({
        products: [],
        name: '',
        price: '',
        massa: '',
        currency: '',
        url: '',
    }),
    methods: {
        addProduct() {
            api.addProduct({
                name: this.name,
                price: this.price,
                massa: this.massa,
                currency: this.currency,
                url: this.url,
            });

            //this.$router.go(0);
        },
        updateProduct(product) {
            api.updateProduct(product);
        },
        deleteProduct(id) {
            api.deleteProduct(id);
            this.$router.go(0);
        },
        getProducts() {
            api.getProducts().then((res) => {
                this.products = res.data;
            });
        },

        submit() {
            this.$refs.observer.validate();
            this.addProduct();
            this.clear();
        },
        clear() {
            this.name = '';
            this.price = '';
            this.massa = '';
            this.currency = '';
            this.url = '';
            this.$refs.observer.reset();
        },
    },
    created() {
        this.getProducts();
    },
};
</script>

<style scoped>
.inp {
    width: 100%;
}
h2 {
    margin-top: 30px;
    text-align: center;
}
.table {
    margin-top: 50px;
}
</style>
