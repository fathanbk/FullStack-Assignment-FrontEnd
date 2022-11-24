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
                    <ion-col size="7"
                        ><h1 id="judul">Registrasi Kolam</h1></ion-col
                    >
                    <ion-col></ion-col>
                </ion-row>
            </ion-grid>

            <div style="margin: 1rem 2rem">
                <div style="margin-top: 1rem">
                    <ion-label>Nama Kolam</ion-label>
                    <ion-item style="border-radius: 12px; margin-top: 1rem">
                        <ion-input
                            placeholder="Kolam 1"
                            v-model="name"
                        ></ion-input>
                    </ion-item>
                </div>
                <div style="margin-top: 1rem">
                    <ion-label>Lokasi Kolam</ion-label>
                    <ion-item style="border-radius: 12px; margin-top: 1rem">
                        <ion-input
                            placeholder="Blok A"
                            v-model="location"
                        ></ion-input>
                    </ion-item>
                </div>
                <div style="margin-top: 1rem">
                    <ion-label>Material Kolam</ion-label>
                    <ion-item style="border-radius: 12px; margin-top: 1rem">
                        <ion-select
                            v-model="material"
                            interface="popover"
                            placeholder="Tanah"
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
                            interface="popover"
                            placeholder="Bundar"
                            v-model="shape"
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
                    >Registrasi</ion-button
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
import { defineComponent } from "vue";

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
            // material_options: [
            //     { id: 1, name: "Tanah" },
            //     { id: 2, name: "Beton" },
            //     { id: 3, name: "Terpal" },
            // ],
            // shape_options: [
            //     { id: 1, name: "Kotak" },
            //     { id: 2, name: "Bundar" },
            // ],
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
            let register = {
                name: this.name,
                location: this.location,
                shape: this.shape,
                material: this.material,
            };

            axios
                .post("http://127.0.0.1:5000/register", register)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });

            console.log(register);
        },
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
