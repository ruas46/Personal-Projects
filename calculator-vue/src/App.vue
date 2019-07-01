<template>
    <div id="app2">
        <h1>Calculator</h1>
        <Calculator />
    </div>
</template>

<script>
import Calculator from "./main/Calculator"

export default {
    components: { Calculator }
}
</script>

<style>
    @font-face {
        font-family: "RobotoMono";
        src: url("./fonts/RobotoMono-Thin.ttf")
    }

    * {
        font-family: "RobotoMono", monospace;
    }

    body {
        margin: 0;
    }

    #app2 {
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        align-items: center;
        text-align: center;

        color: #fff;
        background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
    }
</style>
