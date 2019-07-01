<template>
    <herader class="header"></herader>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
    .header {
        grid-area: header;
        background: linear-gradient(to right, #1e469a, #49a7c1);

        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
