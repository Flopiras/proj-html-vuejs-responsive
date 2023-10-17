<script>
export default {
    props: {
        text: String,
        title: String
    }
}
</script>

<template>
    <section>
        <h5 class="second-color">Running week top selling</h5>
        <h3 class="main-color text-uppercase">top <span class="second-color">trending</span> organic food</h3>
    </section>
</template>

<style lang="scss" scoped>
section {
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