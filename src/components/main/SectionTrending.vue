<script>
import ShopCard from './ShopCard.vue';
export default {
    props: {
        trends: Array
    },
    components: { ShopCard }
}
</script>

<template>
    <section>

        <div class="container">
            <!-- section title -->
            <div class="section-title">
                <h5 class="second-color">Running week top selling</h5>
                <h3 class="main-color text-uppercase">top <span class="second-color">trending</span> organic food</h3>
            </div>
            <!-- section main -->
            <div class="section-main">
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8">
                        <div class="container-fluid">
                            <!-- cards -->
                            <div class="row row-cols-4">
                                <div v-for="trend in trends" :key="trend.id" class="col">
                                    <div class="trend">

                                        <ShopCard :item="trend" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-2"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    margin: 3rem 0;
}

.section-title {
    text-align: center;
    padding-top: 3rem;
    background-image: url(../../assets/img/title-shap.png);
    background-repeat: no-repeat;
    background-position: 50%;

    h5 {
        font-weight: 600;
    }

    h3 {
        font-size: 2.3rem;
        font-weight: 600;
    }

}
</style>