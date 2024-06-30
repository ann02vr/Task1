<script setup>
import AppLayout from '@/components/AppLayout.vue';
import BasicButton from '@/components/BasicButton.vue';
import VisitorInputCard from '@/components/VisitorInputCard.vue';
import VisitorCard from '@/components/VisitorCard.vue';
import { useRootStore } from '@/stores/root';

import { computed } from 'vue';
import { useDisplay } from 'vuetify';

const { lg, md, sm } = useDisplay();

const cols = computed(() => {
    return lg.value ? 4
        : md.value ? 6
            : sm.value ? 12 : 12
})

const store = useRootStore();

</script>

<template>
    <AppLayout>
        <div class="wrapper">
            <p class="title">
                Введите посетителей, для которых нужно разделить счет:
            </p>
            <v-container>
                <v-row>
                    <v-col :cols="cols" v-for="(visitor, index) in store.visitors" :key="index">
                        <VisitorCard @deleteVisitor="store.deleteVisitor" :visitorName="visitor.name"></VisitorCard>
                    </v-col>
                    <v-col :cols="cols">
                        <VisitorInputCard @addVisitor="store.addVisitor" />
                    </v-col>
                </v-row>
            </v-container>
            <div class="nav">
                <div class="nav-btn">
                    <RouterLink to="/">
                        <BasicButton class="btn">
                            Назад
                        </BasicButton>
                    </RouterLink>
                </div>

                <div class="nav-btn">
                    <BasicButton :isDisabled="store.foodDisabled">
                        <RouterLink class="router" to="/food">
                            Вперед
                        </RouterLink>
                    </BasicButton>

                </div>
            </div>
        </div>

    </AppLayout>

</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.title {
    margin: 20px;
    color: $title_color;
    font-family: "Inter", Arial, sans-serif;
    font-weight: bold;
}

.nav {
    display: flex;
    justify-content: center;

}

.nav-btn {
    margin: 20px;

}

.btn {
    margin: 0 auto;
    min-width: 185px;
}

.wrapper {
    flex-direction: column;
    display: flex;
    justify-items: center;
}

.router {
    color: $main_color;
}
</style>