<script>
import FooterTop from './footer/FooterTop.vue';
import FooterBottom from './footer/FooterBottom.vue';
export default {
    components: { FooterTop, FooterBottom },
    props: { emergencyLinks: Array, news: Array, gallery: Array }
}
</script>

<template>
    <footer>
        <FooterTop :gallery="gallery" :news="news" :emergencyLinks="emergencyLinks" />

        <FooterBottom />
    </footer>
</template>