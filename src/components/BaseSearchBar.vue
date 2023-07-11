<script>
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
export default {}
</script>

<template>
    <form action="">
        <input type="text" class='p-3 rounded-start border-0' placeholder="Search...">
        <button class="rounded-end my-3 px-3 py-3 border-0"><font-awesome-icon
                :icon="['fas', 'magnifying-glass']" /></button>
    </form>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/vars' as *;

input {
    width: 60%;
    background-color: $customGrey;

    &:focus-visible {
        outline: none;
    }
}

button {
    color: $secondaryColor;
    font-weight: 600;
    background-color: $customGrey;
    transition: 0.3s;

    &:hover {
        color: white;
        background-color: $secondaryColor;
    }
}
</style>