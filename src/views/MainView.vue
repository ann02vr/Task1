<script setup>
import AppLayout from "@/components/AppLayout.vue";
import BasicButton from "@/components/BasicButton.vue";
</script>

<template>
    <AppLayout>
        <v-container class="fill-height center-container">
            <p class="title">
                Добро пожаловать на сайт приложения для разделения счета!
            </p>
            <p class="title">
                Чтобы приступить, нажмите на кнопку "Начать".
            </p>
            <RouterLink to="/visitors">
                <BasicButton class="ma-5">
                    Начать
                </BasicButton>
            </RouterLink>

        </v-container>
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

basic-button {
    min-width: 150px;
    width: 15%;
}

.center-container {
    align-self: center;
    display: flex;
    justify-content: center;

}
</style>