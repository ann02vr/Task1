<script setup>
import AppLayout from '@/components/AppLayout.vue';
import BasicButton from '@/components/BasicButton.vue';
import FoodInputCard from '@/components/FoodInputCard.vue';
import FoodCard from '@/components/FoodCard.vue';

import { useRootStore } from '@/stores/root';
import { computed } from 'vue';
import { useDisplay } from 'vuetify';

const store = useRootStore();

const { lg, md, sm } = useDisplay();

const cols = computed(() => {
    return lg.value ? 6
        : md.value ? 6
            : sm.value ? 12 : 12
})



</script>

<template>
    <AppLayout>
        <div class="wrapper">
            <p class="title">
                Введите позиции из меню, их стоимость и укажите посетителей, которые заказали данное блюдо:
            </p>
            <v-container>
                <v-row>
                    <v-col class="v-col" :cols="cols" v-for="(item, index) in store.food" :key="index">
                        <FoodCard @deleteFood="store.deleteFood" :foodName="item.foodName" :foodPrice="item.price"
                            :consumers="item.consumers">
                        </FoodCard>
                    </v-col>
                    <v-col :cols="cols">
                        <FoodInputCard @addFood="store.addFood" />
                    </v-col>
                </v-row>
            </v-container>

            <div class="nav">
                <div class="nav-btn">
                    <RouterLink to="/visitors">
                        <BasicButton class="btn">
                            Назад
                        </BasicButton>
                    </RouterLink>
                </div>

                <div class="nav-btn">

                    <BasicButton :isDisabled="store.resultsDisabled">
                        <RouterLink class="router" to="/results">
                            Вперед
                        </RouterLink>
                    </BasicButton>

                </div>
            </div>
        </div>

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

.nav {
    display: flex;
    justify-content: center;

}

.nav-btn {
    margin: 20px;

}

.btn {
    margin: 0 auto;
    min-width: 185px;
}

.wrapper {
    flex-direction: column;
    display: flex;
    justify-items: center;
}

.v-col {
    display: flex;
    justify-content: center;
}

.router {
    color: $main_color;
}
</style>