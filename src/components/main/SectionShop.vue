<script>
import BaseButton from '../BaseButton.vue';
import ShopCard from './ShopCard.vue';
export default {
    components: { BaseButton, ShopCard },
    props: {
        foods: Array
    }
}
</script>

<template>
    <section id="shop">
        <div class="container text-center text-white">
            <h5 class="second-color">Trending Online Store</h5>
            <h1 class="text-uppercase">gogrin all <span class="second-color">organic</span> food</h1>

            <!-- buttons -->
            <ul class="d-flex flex-wrap justify-content-center">
                <li><button class="btn btn-link">All Product</button></li>
                <li><button class="btn btn-link">Apple</button></li>
                <li><button class="btn btn-link">Food</button></li>
                <li><button class="btn btn-link">Orange</button></li>
                <li><button class="btn btn-link">Vegetable</button></li>
            </ul>

            <!-- foods grid -->
            <div class="grid">
                <div class="row">
                    <div v-for="food in foods" :key="food.id" class="col-sm-12 scol-md-6 col-lg-2">
                        <ShopCard :item="food" />
                    </div>
                </div>
            </div>

            <!-- button -->
            <div class="d-flex justify-content-center align-items-center">
                <BaseButton :placeholder="'all products'" :bgClass="'btn-second'" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/vars' as *;

.container {
    background-image: url(../../assets/img/shop-bg-img.jpg);
    min-height: 100px;
    padding: 100px 200px;
}

h1,
h5 {
    font-weight: 600;
}

.btn-link {
    text-decoration: none;
    color: currentColor;
}

.grid {
    margin: 2rem 0;
}
</style>