<template>
    <section class="text-center">
        <div class="container">
            <div class="marks">
                <FontAwesomeIcon icon="fa-quote-left" class="fa-2xl" />
            </div>
            <div class="quote">
                <p>
                    "Dessert pudding dessert jelly bean cupcake sweet caramels gingerbread. Fuitcake biscuit cheesecake.
                    Cookie topping sweets muffine pudding tart bear claw sugar plum croissant.". We started as a small legal
                    consultancy. We have proved our competence and had mani satisfied clients.
                </p>
            </div>
            <div class="signature">
                <h4>Marta Alex</h4>
                <h6 class="second-color">Manager</h6>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/vars' as *;

section {
    margin: 8rem 0;
}

.marks {
    font-size: 3rem;
    color: $main-color;
}

.signature {

    h4,
    h6 {
        font-weight: 600;

    }
}

.quote {
    font-weight: 600;
    width: 60%;
    margin: 1rem auto;
    font-size: 1.2rem;

}
</style>