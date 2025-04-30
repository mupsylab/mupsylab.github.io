<template>
    <div class="loader">
        <div class="circle"></div>
    </div>
</template>

<script>
export default {
    name: "LoadingAni31"
}
</script>

<style scoped>
.circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 10px solid rgba(255, 255, 255, .1);
    border-top: 10px solid #fff;
    animation: animate 1.5s infinite linear;
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