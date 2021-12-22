<template>
    <v-container>
        <validation-observer ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="submit">
                <validation-provider
                    v-slot="{ errors }"
                    name="name"
                    rules="required"
                >
                    <v-text-field
                        v-model="name"
                        :error-messages="errors"
                        label="Введите логин"
                        required
                    ></v-text-field>
                </validation-provider>

                <validation-provider
                    v-slot="{ errors }"
                    name="email"
                    rules="required"
                >
                    <v-text-field
                        v-model="email"
                        :error-messages="errors"
                        label="Введите email"
                        required
                    ></v-text-field>
                </validation-provider>

                <validation-provider
                    v-slot="{ errors }"
                    name="password"
                    rules="required"
                >
                    <v-text-field
                        v-model="password"
                        :error-messages="errors"
                        label="Введите пароль"
                        required
                    ></v-text-field>
                </validation-provider>

                <v-btn class="mr-4" @click="submit()" :disabled="invalid">
                    Вход
                </v-btn>
            </form>
        </validation-observer>
    </v-container>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { mapMutations, mapGetters, mapActions } from 'vuex';
export default {
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    data: () => ({
        name: '',
        email: '',
        password: '',
    }),
    methods: {
        ...mapMutations(['logout']),
        ...mapGetters(['getAuth']),
        ...mapActions(['login']),
        auth() {
            let user = {
                name: this.name,
                email: this.email,
                password: this.password,
            };
            this.login(user);
        },

        submit() {
            this.$refs.observer.validate();
            if (this.getAuth() == false) {
                this.auth();
            } else {
                alert('авторизация уже пройдена');
                this.$router.push('/Admin');
            }
            this.clear();
        },
        clear() {
            this.name = '';
            this.email = '';
            this.password = '';
            this.$refs.observer.reset();
        },
    },

    created() {},
};
</script>

<style scoped>
.inp {
    width: 100%;
}
form {
    margin-top: 40px;
    text-align: center;
}
</style>
