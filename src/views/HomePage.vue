<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <h1 id="judul">Home</h1>
            <ion-grid>
                <ion-row>
                    <ion-col size="6" size-md="4" size-lg="2">
                        <ion-card style="border-radius: 14px" color="dark">
                            <ion-card-header>
                                <ion-card-title>Kolam</ion-card-title>
                                <ion-card-subtitle>10</ion-card-subtitle>
                            </ion-card-header>
                        </ion-card>
                    </ion-col>
                    <ion-col size="6" size-md="4" size-lg="2">
                        <ion-card style="border-radius: 14px" color="dark">
                            <ion-card-header>
                                <ion-card-title>Kolam Aktif</ion-card-title>
                                <ion-card-subtitle>10</ion-card-subtitle>
                            </ion-card-header>
                        </ion-card></ion-col
                    >
                    <ion-col size="6" size-md="4" size-lg="2">
                        <ion-card style="border-radius: 14px" color="dark">
                            <ion-card-header>
                                <ion-card-title>Ikan Hidup</ion-card-title>
                                <ion-card-subtitle
                                    >182
                                    <span id="subsub"
                                        >Ekor</span
                                    ></ion-card-subtitle
                                >
                            </ion-card-header>
                        </ion-card></ion-col
                    >
                    <ion-col size="6" size-md="4" size-lg="2">
                        <ion-card style="border-radius: 14px" color="dark">
                            <ion-card-header>
                                <ion-card-title>Ikan Mati</ion-card-title>
                                <ion-card-subtitle
                                    >89
                                    <span id="subsub"
                                        >Ekor</span
                                    ></ion-card-subtitle
                                >
                            </ion-card-header>
                        </ion-card></ion-col
                    >
                    <ion-col size="6" size-md="4" size-lg="2">
                        <ion-card style="border-radius: 14px" color="dark">
                            <ion-card-header>
                                <ion-card-title>Panen 2022</ion-card-title>
                                <ion-card-subtitle
                                    >109
                                    <span id="subsub"
                                        >Kg</span
                                    ></ion-card-subtitle
                                >
                            </ion-card-header>
                        </ion-card></ion-col
                    >
                    <ion-col size="6" size-md="4" size-lg="2">
                        <ion-card style="border-radius: 14px" color="dark">
                            <ion-card-header>
                                <ion-card-title>Total Pakan</ion-card-title>
                                <ion-card-subtitle
                                    >223
                                    <span id="subsub"
                                        >Kg</span
                                    ></ion-card-subtitle
                                >
                            </ion-card-header>
                        </ion-card></ion-col
                    >
                </ion-row>
            </ion-grid>
            <h1 id="judul">TOTAL BERAT IKAN</h1>
            <ion-slides>
                <ion-slide>
                    <ion-grid>
                        <ion-row>
                            <ion-col size="6">
                                <ion-card
                                    style="border-radius: 14px"
                                    color="dark"
                                >
                                    <img
                                        alt="Silhouette of mountains"
                                        src="/assets/nila.png"
                                    />
                                    <ion-card-header>
                                        <ion-card-title
                                            style="font-weight: bold"
                                            >LELE</ion-card-title
                                        >
                                        <ion-card-title style="color: #2c96f1"
                                            >200 Kg</ion-card-title
                                        >
                                    </ion-card-header>
                                </ion-card>
                            </ion-col>
                            <ion-col size="6" style="margin-left: 0rem">
                                <ion-card
                                    style="border-radius: 14px"
                                    color="dark"
                                >
                                    <img
                                        alt="Silhouette of mountains"
                                        src="/assets/nila.png"
                                        style="height: rem"
                                    />
                                    <ion-card-header>
                                        <ion-card-title
                                            style="font-weight: bold"
                                            >NILA MERAH</ion-card-title
                                        >
                                        <ion-card-title style="color: #2c96f1"
                                            >200 Kg</ion-card-title
                                        >
                                    </ion-card-header>
                                </ion-card></ion-col
                            >
                        </ion-row>
                    </ion-grid>
                </ion-slide>
            </ion-slides>

            <h1 id="judul">KUALITAS AIR</h1>
            <ion-slides>
                <ion-slide
                    ><ion-grid>
                        <ion-row>
                            <ion-col size="6" size-md="4" size-lg="2">
                                <ion-card
                                    style="border-radius: 14px"
                                    color="dark"
                                >
                                    <ion-card-header>
                                        <ion-card-subtitle
                                            >pH</ion-card-subtitle
                                        >
                                        <ion-card-title
                                            >Normal
                                            <span style="color: #2c96f1"
                                                >6 Kolam</span
                                            ></ion-card-title
                                        >
                                        <ion-card-title
                                            >Abnormal
                                            <span style="color: #2c96f1"
                                                >6 Kolam</span
                                            ></ion-card-title
                                        >
                                    </ion-card-header>
                                </ion-card>
                            </ion-col>
                            <ion-col size="6" size-md="4" size-lg="2">
                                <ion-card
                                    style="border-radius: 14px"
                                    color="dark"
                                >
                                    <ion-card-header>
                                        <ion-card-subtitle
                                            >DO</ion-card-subtitle
                                        >
                                        <ion-card-title
                                            >Normal
                                            <span style="color: #2c96f1"
                                                >6 Kolam</span
                                            ></ion-card-title
                                        >
                                        <ion-card-title
                                            >Abnormal
                                            <span style="color: #2c96f1"
                                                >6 Kolam</span
                                            ></ion-card-title
                                        >
                                    </ion-card-header>
                                </ion-card>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-slide>
            </ion-slides>

            <div id="container"></div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import {
    IonContent,
    IonPage,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonSlides,
    IonSlide,
    IonGrid,
    IonRow,
    IonCol,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
    name: "HomePage",
    components: {
        IonContent,
        IonPage,
        IonCard,
        IonCardHeader,
        IonCardSubtitle,
        IonCardTitle,
        IonSlides,
        IonSlide,
        IonGrid,
        IonRow,
        IonCol,
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
}

#hero {
    font-family: 0.5rem;
}
</style>
