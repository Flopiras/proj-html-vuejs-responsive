<template>
    <div class="footer-bottom">
        <div class="container d-flex justify-content-center">
            <div class="col-8 d-flex justify-content-between">
                <div class="copyright">
                    Copiright &#169; gogrin all rights reserved
                </div>
                <div>
                    <ul class="d-flex">
                        <li>Service</li>
                        <li>Pricing Table</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/vars' as *;

.footer-bottom {
    background-color: $main-color;
    padding: 2rem 0;
    color: white
}

li {
    margin-right: 2rem;
}
</style>