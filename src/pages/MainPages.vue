<template>
    <v-container>
        <div id="app">
            <v-app id="inspire" class="texta about">
                <v-carousel
                    cycle
                    height="400"
                    hide-delimiter-background
                    show-arrows-on-hover
                >
                    <template v-slot:prev="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on"
                            ><v-icon color="white"
                                >mdi-arrow-left-bold</v-icon
                            ></v-btn
                        >
                    </template>
                    <template v-slot:next="{ on, attrs }">
                        <v-btn
                            icon
                            class="btn-slide"
                            color="white"
                            v-bind="attrs"
                            v-on="on"
                            ><v-icon color="white"
                                >mdi-arrow-right-bold</v-icon
                            ></v-btn
                        >
                    </template>
                    <v-carousel-item v-for="(slide, i) in slides" :key="i">
                        <v-sheet :color="colors[i]" height="100%">
                            <v-row
                                class="fill-height"
                                align="center"
                                justify="center"
                            >
                                <div class="text-h2">{{ slide }} Slide</div>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
                <div class="texta">
                    <h1>About</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus, quidem corrupti nobis reprehenderit in
                        aliquid vel necessitatibus laborum magnam minima
                        deserunt molestiae, modi quisquam magni, alias quibusdam
                        perferendis molestias! Adipisci.
                    </p>
                </div>
            </v-app>
        </div>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            colors: [
                'grey lighten-3',
                'grey lighten-3',
                'grey lighten-3',
                'grey lighten-3',
                'grey lighten-3',
            ],
            slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
        };
    },
};
</script>

<style scope>
.about {
    margin-top: 35px;
}
.texta h1 {
    margin-top: 100px;
    text-align: center;
}
p {
    margin-top: 70px;
    padding-bottom: 150px;
}
</style>
