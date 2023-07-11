<script>
import BaseButton from './BaseButton.vue';

export default {
    components: { BaseButton },
}
</script>

<template>
    <div class="subscribe-section">
        <div class="container text-center">

            <div class="mini-container">
                <h2 class="fw-bolder">Subscribe <span class="fw-normal">Newsletters</span></h2>
                <h5>Enter your email address to register to our newsletter subscription
                    delivered on a regular basis!</h5>
                <form>
                    <input type="email" class='px-3 py-3 rounded-start border-0' placeholder="Enter your email">
                    <BaseButton :buttonText="'Subscribe'" class="rounded-start-0" />
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>