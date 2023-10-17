<script>
import BaseCard from '../BaseCard.vue';

export default {
    components: { BaseCard },

    props: { item: Object }
}
</script>

<template>
    <div class="shop-card">
        <BaseCard :pic="item.pic" :picName="item.name" :mainCaption="item.name" :saleTag="item.discount" />
        <div class="price mb-3">
            <div class="opacity-50">
                <p class="second-color pe-2">{{ item.price }}</p>
            </div>
            <p>{{ item.lastPrice }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.price {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
}
</style>