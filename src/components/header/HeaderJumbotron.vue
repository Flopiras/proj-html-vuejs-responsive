<script>
import BaseButton from '../../components/BaseButton.vue';

export default {
    components: { BaseButton }
}
</script>

<template>
    <div id="jumbotron">
        <div class="container">

            <div class="jumbo-content text-center">
                <h5>GOGRIN ORGANIC FOOD STORE</h5>
                <h1>Eating naturally & orgainc is always be healty.</h1>

                <!-- buttons -->
                <BaseButton :placeholder="'ABOUT US'" :bgClass="'btn-second'" />
                <BaseButton :placeholder="'OUR HISTORY'" :bgClass="'btn-main'" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#jumbotron {
    background-image: url(../../assets/img/slider.jpg);
    height: 850px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
}

.jumbo-content {
    color: white;

    h1 {
        font-weight: 700;
        font-size: 6rem;

    }
}
</style>