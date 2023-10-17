<script>
export default {
    props: {
        pic: String,
        picName: String,
        mainCaption: String,
        // secondCaption: String,
        saleTag: Boolean
    },
    methods: {
        getImagePath(pic) {
            const url = new URL(`../assets/img/${pic}`, import.meta.url)

            return url.href;
        }
    }
}
</script>

<template>
    <div class="base-card">
        <figure>
            <img :src="getImagePath(pic)" :alt="picName">
            <figcaption v-if="mainCaption">
                <h3>{{ mainCaption }}</h3>
                <!-- <h6>{{ secondCaption }}</h6> -->
            </figcaption>
            <div v-if="saleTag" class="sale-tag">
                <p>SALE!</p>
            </div>
        </figure>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/sass/vars' as *;

.base-card {
    h3 {
        color: currentColor;
        font-size: 1.2rem;
        font-weight: 600;
        padding: 1rem 0 0 0;
        text-align: center;
    }
}

figure {
    position: relative;

    img {
        display: inline-block;
        width: 100%;
    }

    .sale-tag {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 0.6rem;
        border-radius: 10%;
        background-color: $second-main-color;
        color: white;
        font-size: 0.8rem;

        p {
            margin: 0;
        }
    }
}
</style>