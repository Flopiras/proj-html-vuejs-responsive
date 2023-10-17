<script>
import BaseFormSubscribe from '../BaseFormSubscribe.vue';
import BaseCard from '../BaseCard.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    components: { BaseFormSubscribe, BaseCard, FontAwesomeIcon },
    props: { gallery: Array, emergencyLinks: Array, news: Array }
}
</script>

<template>
    <section>
        <div class="container text-white">
            <!-- form -->
            <BaseFormSubscribe />
            <!-- links -->
            <div class="row links">
                <div class="col-2"></div>
                <!-- logo and socials -->
                <div class="col">
                    <!-- logo -->
                    <BaseCard :pic="'footer-logo.png'" :name="'logo'" />

                    <p>War should never be entered upon until every agency of piece has failed not be good</p>

                    <!-- links -->
                    <ul class="d-flex">
                        <li>
                            <div class="icon">
                                <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <FontAwesomeIcon icon="fa-brands fa-instagram" />
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <FontAwesomeIcon icon="fa-brands fa-twitter" />
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <FontAwesomeIcon icon="fa-brands fa-pinterest-p" />
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- emergency links -->
                <div class="col">
                    <h5 class="fw-bold">Emergency link</h5>
                    <ul>
                        <li v-for="link in emergencyLinks" :key="link" class="py-2">{{ link }}</li>
                    </ul>
                </div>
                <!-- blog -->
                <div class="col ">
                    <h5 class="fw-bold">Our Latest Blog</h5>

                    <ul class="blog">
                        <li class="d-flex">
                            <BaseCard :pic="news[0].littlePic" />
                            <div>
                                <p>{{ news[0].text }}</p>
                                <p>{{ news[0].date }}</p>
                            </div>
                        </li>
                        <li class="d-flex">
                            <BaseCard :pic="news[1].littlePic" />
                            <div>
                                <p>{{ news[1].text }}</p>
                                <p>{{ news[1].date }}</p>
                            </div>
                        </li>
                    </ul>

                </div>
                <!-- gallery -->
                <div class="col">
                    <h5 class="fw-bold">Our Gallery</h5>

                    <div class="container-fluid">
                        <div class="row row-cols-3">
                            <div v-for="pic in gallery" :key="pic.id" class="col d-flex flex-wrap">
                                <BaseCard :pic="pic.pic" />
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-2"></div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/vars' as *;

section {
    background-image: url(../../assets/img/footer-bg.jpg);
    padding-bottom: 6rem;
    padding-top: 10rem;
    position: relative;

    ul {
        padding-left: 0;
    }

    #base-form {
        width: calc(100% / 12 * 8);
        position: absolute;
        top: -20%;
        right: 17%;
    }

}

.links {
    font-size: 0.8rem;
}

.icon {
    cursor: pointer;
    margin-right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $main-color;
    width: 2rem;
    height: 2rem;
    border-radius: 10px;

    &:hover {
        transition: background-color 1s ease 0s;
        background-color: $second-main-color;
    }
}
</style>