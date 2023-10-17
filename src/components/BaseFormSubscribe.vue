<script>
import BaseButton from './BaseButton.vue';
export default {
    components: { BaseButton }
}
</script>

<template>
    <div id="base-form">
        <div class="container d-flex justify-content-between align-items-center">
            <h3 class="fw-bold text-uppercase">subscribe our newsletter</h3>
            <!-- input  -->
            <div class="input-group w-50 mb-3">
                <input type="text" class="form-control" placeholder="your email">
                <!-- button -->
                <BaseButton :placeholder="'send'" :bgClass="'btn-main'" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#base-form {
    padding: 3rem;
    color: white;
    background-image: url(../assets/img/counter-bg.jpg);

}
</style>