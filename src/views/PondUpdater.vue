<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-fab-button color="none">
                            <svg
                                width="12"
                                height="20"
                                viewBox="0 0 12 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.67 1.86998L9.9 0.0999756L0 9.99998L9.9 19.9L11.67 18.13L3.54 9.99998L11.67 1.86998Z"
                                    fill="white"
                                /></svg
                        ></ion-fab-button>
                    </ion-col>
                    <ion-col size="7"><h1 id="judul">Edit Kolam</h1></ion-col>
                    <ion-col></ion-col>
                </ion-row>
            </ion-grid>

            <div style="margin: 1rem 2rem">
                <div style="margin-top: 1rem">
                    <ion-label>Nama Kolam</ion-label>
                    <ion-item style="border-radius: 12px; margin-top: 1rem">
                        <ion-input :clear-on-edit="true" v-model="name">{{
                            data.name
                        }}</ion-input>
                    </ion-item>
                </div>
                <div style="margin-top: 1rem">
                    <ion-label>Lokasi Kolam</ion-label>
                    <ion-item style="border-radius: 12px; margin-top: 1rem">
                        <ion-input :clear-on-edit="true" v-model="location">{{
                            data.location
                        }}</ion-input>
                    </ion-item>
                </div>
                <div style="margin-top: 1rem">
                    <ion-label>Material Kolam</ion-label>
                    <ion-item style="border-radius: 12px; margin-top: 1rem">
                        <ion-select
                            placeholder="Tanah"
                            v-model="material"
                            interface="popover"
                            :selectedText="`${data.material}`"
                        >
                            <!-- <ion-select-option
                                v-for="option in material_options"
                                v-bind:value="{
                                    id: option.id,
                                    text: option.name,
                                }"
                                v-bind:key="option.id"
                            >
                                {{ option.name }}
                            </ion-select-option> -->
                            <ion-select-option value="tanah"
                                >Tanah</ion-select-option
                            >
                            <ion-select-option value="beton"
                                >Beton</ion-select-option
                            >
                            <ion-select-option value="terpal"
                                >Terpal</ion-select-option
                            >
                        </ion-select>
                    </ion-item>
                </div>
                <div style="margin-top: 1rem">
                    <ion-label>Bentuk Kolam</ion-label>
                    <ion-item style="border-radius: 12px; margin-top: 1rem">
                        <ion-select
                            placeholder="Kotak"
                            interface="popover"
                            v-model="shape"
                            :selectedText="`${data.shape}`"
                        >
                            <!-- <ion-select-option
                                v-for="option in shape_options"
                                v-bind:value="{
                                    id: option.id,
                                    text: option.name,
                                }"
                                v-bind:key="option.id"
                            >
                                {{ option.name }}
                            </ion-select-option> -->
                            <ion-select-option value="kotak"
                                >Kotak</ion-select-option
                            >
                            <ion-select-option value="bundar"
                                >Bundar</ion-select-option
                            >
                        </ion-select>
                    </ion-item>
                </div>
                <ion-button
                    color="primary"
                    style="width: 100%; margin-top: 1rem; border-radius: 25px"
                    @click.prevent="testSubmit"
                    >Update</ion-button
                >
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import {
    IonContent,
    IonPage,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonLabel,
    IonItem,
    IonButton,
    IonFabButton,
    IonGrid,
    IonRow,
    IonCol,
} from "@ionic/vue";
import { defineComponent, onMounted, ref } from "vue";

// import { Storage } from "@ionic/storage";

import axios from "axios";

export default defineComponent({
    name: "HomePage",
    data() {
        return {
            name: "",
            location: "",
            shape: "",
            material: "",
        };
    },
    components: {
        IonContent,
        IonPage,
        IonInput,
        IonSelect,
        IonSelectOption,
        IonLabel,
        IonItem,
        IonButton,
        IonFabButton,
        IonGrid,
        IonRow,
        IonCol,
    },
    methods: {
        testSubmit() {
            let update = {
                name: this.name,
                location: this.location,
                shape: this.shape,
                material: this.material,
            };

            axios
                .patch(
                    "http://127.0.0.1:5000/pond/" + this.$route.params.id,
                    update
                )
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    setup() {
        let url = window.location.href;
        const urlID = url.split("/")[4];

        const data = ref({});

        onMounted(async () => {
            const response = await axios.get(
                "http://127.0.0.1:5000/pond/" + urlID
            );
            data.value = response.data[0];
            console.log(data);
        });

        return {
            data,
            urlID,
        };
    },
});
</script>

<style scoped>
#container {
    /* text-align: center; */

    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

#container strong {
    font-size: 20px;
    line-height: 26px;
}

#container p {
    font-size: 16px;
    line-height: 22px;

    color: #8c8c8c;

    margin: 0;
}

#container a {
    text-decoration: none;
}

ion-card-subtitle {
    font-size: 2rem;
    font-weight: bold;
}

ion-slide {
    text-align: left;
}

#subsub {
    font-size: 1.5rem;
    font-weight: normal;
}

#judul {
    margin-left: 1rem;
    text-align: center;
}

#hero {
    font-family: 0.5rem;
}
</style>
