<script>
export default {
    props: { achievementsData: Object }
}
</script>

<template>
    <div class="customCard">
        <h3>{{ achievementsData.title }}</h3>
        <h1>{{ achievementsData.number }}</h1>
        <h4>{{ achievementsData.type }}</h4>
    </div>
</template>

<style></style>