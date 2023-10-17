<script>
</script>

<template>
    <div class="top-header">
        <div class="container-fluid pt-3">
            <!-- indirizzi -->
            <div class="row row-cols-1 row-cols-lg-2">

                <div class="col d-flex justify-content-center align-items-center address">
                    <ul>
                        <li>
                            <FontAwesomeIcon icon="location-dot" class="me-1" />
                            <h6>North baukhlula,tala, USA</h6>
                        </li>
                        <li>
                            <FontAwesomeIcon icon="envelope" class="me-1" />

                            <h6>demo@example.com</h6>
                        </li>

                    </ul>
                </div>
                <div class="col d-flex justify-content-center align-items-center">
                    <div class="hours">
                        <p>8.30AM-8.30PM</p>
                    </div>
                    <div class="social">
                        <ul>
                            <li>
                                <FontAwesomeIcon icon="fa-brands fa-facebook-f" class=" me-1" />
                            </li>
                            <li>
                                <FontAwesomeIcon icon="fa-brands fa-twitter" class="me-1" />
                            </li>
                            <li>
                                <FontAwesomeIcon icon="fa-brands fa-instagram" class="me-1" />
                            </li>
                            <li>
                                <FontAwesomeIcon icon="fa-brands fa-pinterest-p" class="me-1" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/vars' as *;

.top-header {
    background-color: $main-color;
    min-height: 50px;
    color: white;
}

.top-header,
h6 {

    font-size: 0.9rem;
}

ul {
    display: flex;

    li {

        display: flex;
        margin-right: 1rem;
    }
}
</style>