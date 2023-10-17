<script>
import BaseCard from '../BaseCard.vue';
export default {
    components: { BaseCard },
    props: { partners: Array }
}
</script>

<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                    <div class="grid container-fluid">
                        <div class="row row-cols-5">
                            <div v-for="partner in partners" :key="partner.id" class="col">
                                <BaseCard :pic="partner.pic" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-2"></div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    margin-top: 6rem;
    margin-bottom: 10rem;
}
</style>