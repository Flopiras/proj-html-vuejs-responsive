<template>
    <div class="footer-bottom">
        <div class="container d-flex justify-content-center">
            <div class="col-8 d-flex justify-content-between flex-wrap">
                <div class="copyright mb-2">
                    Copiright &#169; gogrin all rights reserved
                </div>
                <div>
                    <ul class="d-flex flex-wrap">
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