<script>
import HeaderTop from './header/HeaderTop.vue';
import HeaderMain from './header/HeaderMain.vue';

export default {
    components: { HeaderTop, HeaderMain },
    props: { options: Array }
}
</script>

<template>
    <header>
        <HeaderTop />

        <HeaderMain :options="options" />
    </header>
</template>