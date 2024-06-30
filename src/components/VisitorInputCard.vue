<template>
    <v-form class="card" @submit.prevent>
        <v-text-field class="text-field" variant="solo-filled" label="Введите имя посетителя" v-model="name"
            :rules="[requiredValue, requiredUnique]"
            @keydown.enter="$emit('addVisitor', name), clearInput()"></v-text-field>
        <CardButton @click="$emit('addVisitor', name), clearInput()">
            Добавить
        </CardButton>
    </v-form>
</template>

<script setup>
import { ref } from 'vue';
import { useRootStore } from '@/stores/root';
import CardButton from '@/components/CardButton.vue';

const store = useRootStore();
const name = ref('');

function requiredValue(v) {
    return v.trim().length > 0 || 'Необходимо ввести имя посетителя'
}
function requiredUnique(v) {
    return store.isUnique(v) || 'Имя посетителя должно быть уникальным'
}
function clearInput() {
    name.value = ' ';
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
    min-width: 300px;
    max-width: 500px;
}

.text-field {
    margin: 10px;
    font-weight: bold;
    max-height: 80px;
    min-width: 250px;
    max-width: 260px;
}
</style>