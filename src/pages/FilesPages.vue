<template>
    <v-container>
        <form @submit.prevent="loadFiles" class="filesForm">
            <v-file-input
                v-model="files"
                chips
                counter
                multiple
                show-size
                truncate-length="40"
            ></v-file-input>

            <v-btn type="submit">
                Загрузить файлы
            </v-btn>
        </form>
        <v-row>
            <v-col>
                <h2>Галерея изображений</h2>
                <v-img
                    class="img"
                    style="margin-bottom:20px"
                    v-for="file in img"
                    :key="file"
                    :aspect-ratio="1"
                    max-width="500px"
                    max-height="250px"
                    @click="openPhoto(file)"
                    :src="file"
                />
            </v-col>
            <v-col>
                <!-- <h2>Загруженные файлы на сервере</h2>
                <div v-for="file in filesLoad" :key="file" :src="file">
                    {{ file }}
                </div> -->
                <v-card class="mx-auto files" max-width="500">
                    <v-toolbar>
                        <v-toolbar-title>Файлы</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-list>
                        <v-list-group
                            v-for="item in items"
                            :key="item.title"
                            v-model="item.active"
                            :prepend-icon="item.action"
                            no-action
                        >
                            <template v-slot:activator>
                                <v-list-item-content>
                                    <v-list-item-title
                                        v-text="item.title"
                                    ></v-list-item-title>
                                </v-list-item-content>
                            </template>

                            <v-list-item
                                v-for="child in item.items"
                                :key="child"
                            >
                                <v-list-item-content>
                                    <v-list-item-title
                                        class="item"
                                        v-text="child"
                                        @click="openPhoto(child)"
                                    ></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-group>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import api from '../api.js';

export default {
    components: {},
    data: () => ({
        files: [],
        filesLoad: [],
        img: [],
        items: [],
    }),
    methods: {
        openPhoto(url) {
            window.open(url, '_blank');
        },
        loadItems() {
            api.getImg().then((res) => {
                this.img = res;
                this.items.push({
                    active: true,
                    items: res,
                    title: 'Картинки',
                });
            });
            api.getDocument().then((res) => {
                this.items.push({
                    items: res,
                    title: 'Документы',
                });
            });
            api.getAudio().then((res) => {
                this.items.push({
                    items: res,
                    title: 'Музыка',
                });
            });
            api.getVideo().then((res) => {
                this.items.push({
                    items: res,
                    title: 'Видео',
                });
            });
            api.getOther().then((res) => {
                this.items.push({
                    items: res,
                    title: 'Другое',
                });
            });
        },
        loadFiles() {
            api.uploadFiles(this.files);
            this.files = [];
        },
    },
    created() {
        this.loadItems();
    },
};
</script>

<style scoped>
.v-btn {
    display: block;
    margin: 0 auto;
}
.filesForm {
    margin-top: 40px;
    margin-bottom: 30px;
}
h2 {
    margin-bottom: 20px;
}
.files {
    margin-top: 55px;
}
.img {
    box-shadow: 7px 6px 14px -9px #495b75 !important;
    cursor: pointer;
}
.item {
    cursor: pointer;
}
</style>
