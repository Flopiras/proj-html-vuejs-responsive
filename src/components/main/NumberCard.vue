<script>
export default {
    props: {
        mainText: String,
        bottomText: String
    }
}
</script>

<template>
    <div class="text-center">
        <h1 class="second-color">{{ mainText }}</h1>
        <h5 class="text-white">{{ bottomText }}</h5>
    </div>
</template>

<style scoped>
h1 {
    font-size: 4rem;
    font-weight: 600;
}

h5 {
    font-size: 1rem;
}
</style>