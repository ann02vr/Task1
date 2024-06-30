<template>
    <v-form class="card">
        <p class="text-field"> {{ visitorName }}</p>
        <CardButton @click="$emit('deleteVisitor', visitorName)">
            Удалить
        </CardButton>
    </v-form>
</template>

<script setup>
import CardButton from '@/components/CardButton.vue';

defineProps({
    visitorName: String,
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
    min-width: 300px;
    max-width: 500px;
}

.text-field {
    font-size: 36px;
    color: $main_color;
    margin: 10px;
    max-height: 80px;
    min-width: 250px;
    max-width: max-content;
}
</style>