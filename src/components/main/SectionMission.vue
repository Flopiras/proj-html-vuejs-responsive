<script>
import BaseCard from '../BaseCard.vue';

export default {
    components: { BaseCard },
    props: { products: Array },

}
</script>

<template>
    <section id="mission">
        <div class="container">
            <div class="row">
                <div class="col-2"></div>
                <!-- we can -->
                <div class="col-4 ">
                    <h2 class="main-color fw-bold">
                        <span class="second-color">Look what</span> consumer power has done with <span
                            class="second-color">organic food;</span> we can do the same with clothes.
                    </h2>
                </div>
                <div class="col-4">
                    <p>
                        I have a need to make sorts of connections literal sometimes, and a vehicle often to do that.
                        I have a relationship to hosting culture. <span class="second-color">Ii isn't really about it helps
                            to do that. I have a relatioonship to hosting culture.</span>
                    </p>
                    <p>
                        Need to make these sort of connections literal sometimes, and a vehicle often to do that.
                        I have a relationship to hosting culture.
                    </p>
                </div>
                <div class="col-2">
                    <img src="../../assets/img/fe-shap1-1.png" alt="All Natural">
                </div>
            </div>
            <div class="row my-4">
                <div class="col-2"></div>
                <div v-for="product in products" :key="product.id" class="col-2">
                    <BaseCard :pic="product.pic" :picName="product.name" />
                </div>
                <div class="col-2">
                    <BaseCard :pic="products[0].pic" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/vars' as *;

section {
    margin-bottom: 3rem;
}

.col-4 {

    h2 {
        font-size: 2.5rem;
    }

    p {
        padding-top: 1rem;
        font-size: 0.8rem;
    }
}

.main-color {
    color: $main-color;
}

.second-color {
    color: $second-main-color;
}

.card {
    min-height: 80px;
}
</style>