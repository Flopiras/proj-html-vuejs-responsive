<script>
export default {
    props: { text: String }
}
</script>

<template>
    <div class="offer-card">
        <div class="title">{{ text }}</div>
        <div class="subtitle text-uppercase">shop now</div>
    </div>
</template>

<style lang="scss" scoped>
.offer-card {
    padding: 1rem;
    height: 100%;
    font-weight: 600;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}

.title {
    width: 70%;
    font-size: 1.5rem;
}
</style>