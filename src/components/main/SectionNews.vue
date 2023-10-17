<script>
import NewsCard from './NewsCard.vue';
export default {
    components: { NewsCard },
    props: { news: Array }
}
</script>

<template>
    <section>
        <div class="container">
            <!-- title -->
            <div class="section-title">
                <h5 class="second-color">The news what we have</h5>
                <h3 class="main-color text-uppercase">gogrin latest <span class="second-color">news</span> feed</h3>
            </div>
            <!--grid  -->
            <div class="grid container-fluid">
                <div class="row">
                    <div class="col-sm-12 col-lg-2"></div>
                    <div class="col-sm-12 col-lg-8">
                        <!-- news cards -->
                        <div class="news-cards row">
                            <div v-for="item in news" :key="item.id" class="col-sm-12 col-lg-4">
                                <NewsCard :item="item" />
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-2"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    margin-top: 4rem;
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