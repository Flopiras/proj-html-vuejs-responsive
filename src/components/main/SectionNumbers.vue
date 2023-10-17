<script>
import NumberCard from './NumberCard.vue';

export default {
    components: { NumberCard }
}
</script>

<template>
    <section>
        <div class="numbers container">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                    <div class="d-flex justify-content-between align-items-center">
                        <NumberCard :mainText="'29+'" :bottomText="'Years of experienced'" />
                        <img class="mx-2" src="../../assets/img/counter-shap1.png" alt="">
                        <NumberCard :mainText="'200+'" :bottomText="'Everyday Online Delivery'" />
                        <img class="mx-2" src="../../assets/img/counter-shap1.png" alt="">
                        <NumberCard :mainText="'20K'" :bottomText="'Client Satysfaction'" />
                        <img class="mx-2" src="../../assets/img/counter-shap1.png" alt="">
                        <NumberCard :mainText="'30+'" :bottomText="'Award Winning'" />
                    </div>
                </div>
                <div class="col-2"></div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/vars' as *;

.numbers {
    background-image: url(../../assets/img/counter-bg.jpg);
    padding: 50px 0;
}
</style>