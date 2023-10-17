<script>
export default {

    props: {
        placeholder: String,
        bgClass: String,
    },
}
</script>

<template>
    <button :class="bgClass" class="btn " type="button">
        <span class="text-uppercase">{{ placeholder }}</span></button>
</template>

<style lang="scss" scoped>
@use '../assets/sass/vars' as *;

button {
    margin: 0 1rem;
    color: white;
    padding: 1rem 3.5rem;
    border-radius: 0 20px 0 20px;

}


.btn-main {
    background-color: $main-color;

    &:hover {
        transition: background-color 1s ease 0s;
        background-color: $second-main-color;
    }
}

.btn-second {
    background-color: $second-main-color;

    &:hover {
        background-color: $main-color;
        transition: background-color 1s ease 0s;
    }
}
</style>