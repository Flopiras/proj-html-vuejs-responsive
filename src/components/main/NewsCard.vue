<script>
import BaseCard from '../BaseCard.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    components: { BaseCard, FontAwesomeIcon },
    props: { item: Object }
}
</script>

<template>
    <div class="my-2">
        <!-- pic -->
        <div class="pic">
            <BaseCard :pic="item.pic" />
        </div>
        <!-- caption -->
        <div class="caption d-flex">
            <div class="author">
                <FontAwesomeIcon icon="fa-user" class="second-color" />
                <span class="mx-1">Gogrin</span>
            </div>
            <div class="date">
                <FontAwesomeIcon icon="fa-regular fa-clock" class=" second-color ms-1" />
                <span class="mx-1">{{ item.date }}</span>
            </div>
        </div>
        <!-- title -->
        <h6 class="main-color my-1 fw-bold">{{ item.text }}</h6>
        <!-- preview -->
        <p class="py-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor suscipit animi provident
            reprehenderit </p>
        <button class="main-color btn btn-link text-uppercase">read more...</button>
    </div>
</template>

<style scoped>
.pic:hover {
    opacity: 0.5;
}

span,
p {
    font-size: 0.9rem;
}

button {
    padding-left: 0;
    text-decoration: none;
    font-size: 0.8rem;
}
</style>