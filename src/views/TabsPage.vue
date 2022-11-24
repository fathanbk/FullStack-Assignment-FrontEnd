<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="tab1" href="/tabs/tab1">
                    <ion-icon :icon="home" />
                </ion-tab-button>

                <ion-tab-button tab="tab2" href="/tabs/tab2">
                    <ion-icon src="assets/img/pond.svg" />
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonIcon,
    IonPage,
    IonRouterOutlet,
} from "@ionic/vue";
import { home, fish } from "ionicons/icons";

export default defineComponent({
    name: "TabsPage",
    components: {
        IonTabs,
        IonTabBar,
        IonTabButton,
        IonIcon,
        IonPage,
        IonRouterOutlet,
    },
    setup() {
        return {
            home,
            fish,
        };
    },
});
</script>
