<template>
    <v-btn class="rounded-xl text-none v-btn" size="x-large" :disabled="isDisabled">
        <span class="btn-text">
            <slot />
        </span>
    </v-btn>
</template>

<script setup>

defineProps({
    isDisabled: [Boolean, null],
})

</script>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.v-btn {
    display: block;
    background-color: $accent;
    border-color: $btn_border;
    border-width: medium;
    box-shadow: 10px 10px 10px $card_shadow;
}

.btn-text {
    font-family: "Inter", Arial, sans-serif;
    font-weight: bold;
    font-size: 32px;
    color: $main_color
}

.v-btn--disabled.v-btn--variant-elevated {
    background: $btn_border;
    box-shadow: 10px 10px 10px $card_shadow;
}
</style>