<script>
import OfferCard from './OfferCard.vue';

export default {
    components: { OfferCard }
}
</script>

<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-lg-2"></div>
                <div class="left-offer my-2 col-sm-12 col-md-6 col-lg-4">
                    <OfferCard :text="'Fresh gurden tomato combo offer... $37'" />
                </div>
                <div class="right-offer my-2 col-sm-12 col-md-6 col-lg-4">
                    <OfferCard :text="'Some organic healty fruits combo offer... $49'" />
                </div>
                <div class="col-sm-12 col-lg-2"></div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    margin-bottom: 5rem;
}

.left-offer {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    background-image: url(../../assets/img/offer-img01.jpg);
}

.right-offer {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    background-image: url(../../assets/img/offer-img02.jpg);
}

.left-offer,
.right-offer {
    height: 200px;
    background-size: contain;
    background-repeat: no-repeat;
}
</style>