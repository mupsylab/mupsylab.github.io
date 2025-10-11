<template>
    <div class="loader">
        <div class="center">
            <div class="text">LOADING</div>
            <div class="ring"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoadingAni33"
}
</script>

<style scoped>
.center {
    position: relative;
}
.ring {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    box-shadow: 0 4px 0 #262626;
    background: transparent;
    animation: animate 1s linear infinite;
}
.text {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    line-height: 300px;
    font-size: 2em;
    background: transparent;
    box-shadow: 5px 5px 5px rgba(1, 1, 1, 1);
}
@keyframes animate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>