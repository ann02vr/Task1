<script setup>
import AppLayout from '@/components/AppLayout.vue';
import ResultCard from '@/components/ResultCard.vue';
import BasicButton from '@/components/BasicButton.vue';
import { useRootStore } from '@/stores/root';

const store = useRootStore();

function clearAll() {
    store.visitors = [];
    store.food = [];
}

</script>

<template>
    <AppLayout>
        <div class="wrapper">
            <p class="title">Результаты</p>
            <v-container class="v-flexbox">
                <v-row class="v-flexbox">
                    <v-col class="v-flexbox" cols="12" v-for="(visitor, index) in store.visitors" :key="index">
                        <ResultCard :visitor-name="visitor.name" :waste="visitor.waste"></ResultCard>
                    </v-col>
                </v-row>
            </v-container>
            <div class="btn-wrapper">
                <RouterLink to="/">
                    <BasicButton class="btn" @click="clearAll">
                        В главное меню
                    </BasicButton>
                </RouterLink>
            </div>

        </div>
    </AppLayout>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.wrapper {
    flex-direction: column;
    display: flex;
    justify-items: center;
}

.title {
    margin: 20px;
    color: $title_color;
    font-weight: bold;
    font-size: 60px;
}

.btn-wrapper {
    display: flex;
    justify-content: center;
}

.btn {
    margin: 40px;
    display: block;
    min-width: 400px;
    min-height: 40px;
}

.v-flexbox {
    padding: 0;
}
</style>