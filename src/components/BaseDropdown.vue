<script>
export default {
    data() {
        return {
            isClicked: false
        }
    },
    props: {
        placeholder: String
    },
    methods: {
        toggleMenu() {
            this.isClicked = !this.isClicked;
        }
    }
}
</script>

<template>
    <div class="dropdown">
        <button @click="toggleMenu" class="btn btn-link dropdown-toggle">{{ placeholder }}</button>

        <ul :class="{ show: isClicked }" class="dropdown-menu">
            <li><a class="dropdown-item" href="#">HOME-1</a></li>
            <li><a class="dropdown-item" href="#">HOME-2</a></li>
            <li><a class="dropdown-item" href="#">HOME-3</a></li>
            <li><a class="dropdown-item" href="#">HOME-LANDING</a></li>
            <li><a class="dropdown-item" href="#">HOME-VIDEO</a></li>
        </ul>
    </div>
</template>

<style scoped>
button {
    text-decoration: none;
    color: currentColor;
}
</style>