<template>
    <v-btn class="rounded-xl text-none v-btn" size="x-large">
        <span class="btn-text">
            <slot />
        </span>
    </v-btn>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.v-btn {
    display: block;
    background: $accent;
    border-color: $btn_border;
    border-width: medium;
    box-shadow: 10px 10px 10px #A3A3A3;
}

.btn-text {
    font-family: "Inter", Arial, sans-serif;
    font-weight: semibold;
    font-size: 30px;
    color: $main_color
}
</style>