<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-grid>
                <ion-row class="ion-align-items-center">
                    <ion-col><h1 id="judul">Kolam</h1> </ion-col>
                    <ion-col class="ion-text-end" style="margin-right: 1rem">
                        <ion-img
                            src="assets/img/sort.svg"
                            style="
                                width: 24px;
                                display: inline-block;
                                margin-right: 1rem;
                            "
                        ></ion-img>
                        <ion-img
                            src="assets/img/Vector.svg"
                            style="width: 24px; display: inline-block"
                        ></ion-img
                    ></ion-col>
                    <!-- <ion-col class="ion-text-end">
                    ></ion-col> -->
                </ion-row>
            </ion-grid>
            <ion-list>
                <ion-item v-for="(item, index) in data" :key="index">
                    <ion-card color="dark" style="border-radius: 16px">
                        <ion-card-header>
                            <ion-grid>
                                <ion-row
                                    class="ion-align-items-center"
                                    style="border-bottom: 2px solid black"
                                >
                                    <ion-col id="card-title"
                                        ><strong>{{
                                            item.alias
                                        }}</strong></ion-col
                                    >
                                    <ion-col class="ion-text-end"
                                        ><ion-badge
                                            v-if="item.isActive"
                                            style="
                                                background-color: green;
                                                padding: 0.5rem;
                                                font-size: 16px;
                                                border-radius: 10px;
                                            "
                                            >Aktif</ion-badge
                                        >
                                        <ion-badge
                                            v-else
                                            style="
                                                background-color: red;
                                                padding: 0.5rem;
                                                font-size: 16px;
                                                border-radius: 10px;
                                            "
                                            >Tidak Aktif</ion-badge
                                        ></ion-col
                                    >
                                </ion-row>

                                <ion-row
                                    class="ion-align-items-center"
                                    style="margin-top: 10px"
                                >
                                    <ion-col class="ion-text-start" size="auto"
                                        ><ion-img
                                            src="assets/img/calendar.svg"
                                            style="
                                                width: 24px;
                                                display: inline-block;
                                            "
                                        />
                                    </ion-col>
                                    <ion-col
                                        class="ion-text-start"
                                        style="font-size: 16px"
                                        >{{
                                            formatDate(item.build_at)
                                        }}</ion-col
                                    >
                                </ion-row>
                                <ion-row class="ion-align-items-center">
                                    <ion-col class="ion-text-start" size="auto"
                                        ><ion-img
                                            src="assets/img/timesheet.svg"
                                            style="
                                                width: 24px;
                                                display: inline-block;
                                            "
                                        />
                                    </ion-col>
                                    <ion-col
                                        class="ion-text-start"
                                        style="font-size: 16px"
                                        >{{
                                            getDiffDateFromNow(item.build_at)
                                        }}
                                        Hari</ion-col
                                    >
                                </ion-row>
                                <ion-row class="ion-align-items-center">
                                    <ion-col class="ion-text-start" size="auto"
                                        ><ion-img
                                            src="assets/img/fish.svg"
                                            style="
                                                width: 24px;
                                                display: inline-block;
                                            "
                                        />
                                    </ion-col>
                                    <ion-col
                                        class="ion-text-start"
                                        style="font-size: 16px"
                                        >{{ item.id_int }} Ekor</ion-col
                                    >
                                </ion-row>
                            </ion-grid>

                            <!-- <ion-card-title>Kolam</ion-card-title>
                            <ion-card-subtitle>10</ion-card-subtitle> -->
                        </ion-card-header>
                    </ion-card>
                </ion-item>
            </ion-list>
            <ion-fab vertical="bottom" horizontal="end" slot="fixed">
                <ion-fab-button color="tertiary" href="/register">
                    <ion-icon :icon="add" style="font-size: 50px"></ion-icon>
                </ion-fab-button>
            </ion-fab>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import {
    IonPage,
    IonContent,
    IonFabButton,
    IonFab,
    IonIcon,
    IonList,
    IonItem,
    IonCard,
    IonCardHeader,
    IonGrid,
    IonRow,
    IonCol,
    IonBadge,
    IonImg,
} from "@ionic/vue";
import { add } from "ionicons/icons";
import axios from "axios";

export default defineComponent({
    name: "PondPage",
    components: {
        IonContent,
        IonPage,
        IonFabButton,
        IonFab,
        IonIcon,
        IonList,
        IonItem,
        IonCard,
        IonCardHeader,
        IonGrid,
        IonRow,
        IonCol,
        IonBadge,
        IonImg,
    },
    methods: {
        formatDate(date: string) {
            const d = new Date(date);
            const month = d.getMonth() + 1;
            const day = d.getDate();
            const year = d.getFullYear();
            return `${day}-${month}-${year}`;
        },
        getDiffDateFromNow(date: string) {
            const d = new Date(date);
            const diff = new Date().getTime() - d.getTime();
            return Math.floor(diff / (1000 * 60 * 60 * 24));
        },
    },
    setup() {
        const data = ref();

        onMounted(async () => {
            const response = await axios.get(
                "http://jft.web.id/fishapi/api/ponds"
            );
            data.value = response.data;
            console.log(response.data);
        });

        return {
            add,
            data,
        };
    },
});
</script>
<style scoped>
ion-content {
    background-color: #1f1d2b;
}
#judul {
    margin-left: 1rem;
}
#card-title {
    font-size: 18px;
}
ion-card {
    width: 100%;
}
ion-list {
    background-color: #1f1d2b;
}
</style>
