<template>
    <v-form class="card">
        <div class="wrapper">
            <p class="title">Блюдо: </p>
            <p class="title"> {{ foodName }}</p>
        </div>
        <div class="wrapper">
            <p class="title">Цена:</p>
            <p class="title"> {{ foodPrice }}</p>
        </div>
        <v-container class="v-container">
            <v-row justify="start">
                <v-col class="v-col" cols="5" v-for="(visitor, index) in store.visitors" :key="index">
                    <v-checkbox color="#dc004f" class="checkbox" :model-value="consumers" :label="visitor.name"
                        :value="visitor.name" hide-details disabled></v-checkbox>
                </v-col>
            </v-row>
        </v-container>
        <CardButton @click="$emit('deleteFood', foodName, consumers)" class="btn">
            Удалить
        </CardButton>
    </v-form>

</template>

<script setup>
import CardButton from './CardButton.vue';
import { useRootStore } from '@/stores/root';
const store = useRootStore();

defineProps({
    foodName: String,
    foodPrice: Number,
    consumers: Array,
})

</script>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: $card_background;
    border-radius: 60px;
    box-shadow: 10px 10px 10px $card_shadow;
    min-height: 200px;
    min-width: 400px;
    max-width: 450px;
}

.text-field {
    color: $main_color;
    font-weight: bold;
    font-size: 24px;
    margin: 10px;
    max-height: 80px;
    min-width: 250px;
    max-width: 260px;
}

.title {
    color: $main_color;
    font-weight: bold;
    font-size: 24px;
    min-width: 90px;
    margin: 20px 10px;
}

.wrapper {
    display: flex;
    margin-top: 10px;
}

.checkbox {
    color: black;
}

.v-col {
    padding: 0;
    max-width: fit-content;

}

.v-container {
    padding: 0;
    max-width: 330px;
    margin: 0 auto;
}

.btn {
    margin: 20px;
}
</style>