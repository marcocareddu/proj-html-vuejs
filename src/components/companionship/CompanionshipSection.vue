<script>
export default {}
</script>

<template>
    <div class="container d-flex py-5 justify-content-evenly">
        <div class="picture px-5">
            <img src="../../assets/img/home-2-popup-video-poster.jpg" class="img-fluid rounded-2" alt="">
            <img src="../../assets/img/icon-youtube-play.png" class="youtube img-fluid" alt="">
        </div>

        <div class="text d-flex flex-column align-self-center">
            <h6>GET STARTED <span class="fw-bolder">EFFORTLESSLY</span></h6>
            <h1 class="fw-bolder pt-3">Enjoy Our</h1>
            <h1 class="companionship">Companionship</h1>
            <p>Sneek peek into what has in store for you on our online teaching and mentoring portal. Seek for some hidden
                hints of early-bird rewards as well.</p>
            <a href="#" class="fw-bolder">Download free guidebook</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/_vars.scss' as *;

.picture {
    position: relative;
    cursor: pointer;
}

img {
    height: 450px;
}

.youtube {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 60px;
    transform: translate(-50%, -50%);
    cursor: pointer;
}

.text {
    flex-basis: 20%;
}

h1,
h6 {
    color: $tertiaryColor;

}

.companionship,
a {
    color: $secondaryColor;
}

a {
    font-size: 0.8rem;
}
</style>