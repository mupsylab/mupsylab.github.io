<template>
    <div class="loader">
        <h1>Loading</h1>
    </div>
</template>

<script>
export default {
    name: "LoadingAni43"
}
</script>

<style scoped>
.loader {
    width: 300px;
    height: 50px;
    background: #affd5b;
    border: 2px solid #262626;
    transform: skewX(-20deg);
    overflow: hidden;
}
h1 {
    margin: 0;
    padding: 0;
    color: #262626;
    text-align: center;
    line-height: 50px;
    text-transform: uppercase;
    font-family: sans-serif;
    letter-spacing: 15px;
    position: relative;
}
.loader::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
    border-left: 2px solid #262626;
    border-right: 2px solid #262626;
    animation: animate 6s linear infinite;
}
@keyframes animate {
    0% {
        transform: translateX(-100%);
    }
    40% {
        transform: translateX(0%);
    }
    80% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(100%);
    }
}
</style>