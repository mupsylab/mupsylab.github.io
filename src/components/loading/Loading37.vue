<template>
    <div class="loader">
        <h2>
            Loading
        </h2>
    </div>
</template>

<script>
export default {
    name: "LoadingAni37"
}
</script>

<style scoped>
.loader {
    font-family: verdana;
    position: absolute;
    width: 200px;
    height: 200px;
    font-size: 20px;
    margin: 0;
    padding: 0;
    text-align: center;
    line-height: 200px;
    overflow: hidden;
}

.loader h2 {
    color: #fff;
    position: absolute;
    margin: 0;
    padding: 0;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.loader::before {
    content: '';
    position: absolute;
    top: 0;
    width: 50%;
    height: 150%;
    background: #0060da;
    animation: animate 2s linear infinite;
}

.loader::after {
    content: '';
    position: absolute;
    top: 0;
    width: 50%;
    height: 150%;
    background: #e6005e;
    animation: animate2 1s linear infinite;
}

@keyframes animate {
    0% {
        transform: translateY(100%);
        left: 100%;
    }
    100% {
        transform: translateY(-100%);
        left: -50%;
    }
}

@keyframes animate2 {
    0% {
        transform: translateY(100%);
        left: -50%;
    }
    100% {
        transform: translateY(-100%);
        left: 100%;
    }
}
</style>