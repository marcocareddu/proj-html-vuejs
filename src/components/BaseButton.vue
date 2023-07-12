<script>
export default {
    props: { buttonText: String }
}
</script>

<template>
    <button class='my-3 px-5 py-3 rounded border-0'>
        <slot></slot>
        {{ buttonText }}
    </button>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/vars' as *;

button {
    color: white;
    font-weight: 600;
    background-color: $secondaryColor;
    transition: 0.3s;

    &:hover {
        background-color: $tertiaryColor;
    }
}
</style>