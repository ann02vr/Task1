<script setup>

</script>

<template>

    <body>
        <v-container class="my-7">
            <div class="back_card">
                <slot></slot>
            </div>
        </v-container>
    </body>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.back_card {
    min-height: 650px;
    background-color: $main_color;
    border-radius: 60px;
    box-shadow: 10px 10px 10px $back_shadow;
    text-align: center;
    display: flex;
}
</style>