<template>
    <div class="card">
        <p class="title">Пользователь {{ visitorName }} должен заплатить {{ waste }} рублей</p>
    </div>
</template>

<script setup>
defineProps({
    visitorName: String,
    waste: Number
})
</script>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.card {
    background: $card-background;
    border-radius: 60px;
    box-shadow: 10px 10px 10px $card_shadow;
    min-height: 150px;
    max-height: min-content;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;
}

.title {
    color: black;
    font-size: 40px;
    font-weight: 600;
    margin: 20px;
}
</style>