<script>
import BaseButton from '../BaseButton.vue';

export default {
    components: { BaseButton }
}
</script>

<template>
    <section>
        <div class="container d-flex flex-column align-items-center justify-content-center text-center text-white">
            <h6 class="text-uppercase">here you can get 100% fresh organic food</h6>
            <h2 class="fw-bold mb-3">Best organic food up to 25% off for all products</h2>
            <p>Thee most beautiful people we have hnow who have known defeat, known suffering, known struggle, known loss,
                and have found their way out of those depths. The most beautiful people we have are those who have known
                defeat, known suffering</p>

            <div class="buttons">
                <BaseButton :bgClass="'btn-second'" :placeholder="'+0888123 56 906'" />
                <BaseButton :bgClass="'btn-main'" :placeholder="'APOINMENT'" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.container {
    background-image: url(../../assets/img/call-to-bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    padding: 3rem 1rem;
}
</style>