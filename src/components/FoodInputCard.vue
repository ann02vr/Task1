<template>
    <v-form class="card">
        <div class="wrapper">
            <p class="title">Блюдо: </p>
            <v-text-field class="text-field" variant="solo-filled" label="Введите блюдо" v-model="foodName"
                :rules="[requiredValue]"
                @keydown.enter="$emit('addFood', foodName, Number(price), selected), clearInput()"></v-text-field>
        </div>
        <div class="wrapper">
            <p class="title">Цена:</p>
            <v-text-field class="text-field" variant="solo-filled" label="Введите стоимость блюда" type="text"
                oninput="this.value = this.value.replace(/[^0-9]/g, '')" v-model="price" :rules="[requiredValue]"
                @keydown.enter="$emit('addFood', foodName, Number(price), selected), clearInput()"></v-text-field>
        </div>
        <v-container class="v-container">
            <v-row justify="start">
                <v-col class="v-col" cols="5" v-for="(visitor, index) in store.visitors" :key="index">
                    <v-checkbox color="#dc004f" class="checkbox" v-model="selected" :label="visitor.name"
                        :value="visitor.name" hide-details></v-checkbox>
                </v-col>
            </v-row>
        </v-container>
        <CardButton class="btn" @click="$emit('addFood', foodName, Number(price), selected), clearInput()">
            Добавить
        </CardButton>
    </v-form>

</template>

<script setup>
import { ref } from 'vue';
import { useRootStore } from '@/stores/root';
import CardButton from './CardButton.vue';

const store = useRootStore();

const foodName = ref('');
const price = ref('');
const selected = ref([]);

function requiredValue(v) {
    return v.trim().length > 0 || 'Необходимо ввести значение';
}


function clearInput() {
    foodName.value = '';
    price.value = '';
    selected.value = [];
}

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
    margin: 20px 0;
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