<template>
    <div class="container">
        <div class="loader one">
            <span></span>
            <span></span>
        </div>
        <div class="loader two">
            <span></span>
            <span></span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'LoadingAni2'
}
</script>
<style scoped>
.container {
    grid-column: 1 / 13;
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.container .loader {
    position: relative;
    width: 150px;
    height: 150px;
    margin: 100px;
}

.container .loader.one span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: #5989ff;
    border-radius: 50%;
    animation: animate ease-in-out 2s infinite;
}

.container .loader.one span:nth-child(2) {
    left: 50%;
    background: rgba(56, 109, 241, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    animation-delay: -1s;
}

@keyframes animate {

    0%,
    100% {
        transform: translateX(-80px);
    }

    50% {
        transform: translateX(80px);
    }
}

.container .loader.one span::before,
.container .loader.two span:nth-child(1)::before {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -20%;
    width: 140%;
    height: 40px;
    border-radius: 50%;
    background: radial-gradient(rgba(0, 0, 0, 0.04), transparent, transparent);
}


.container .loader.two {
    position: relative;
    width: 180px;
    height: 180px;
}

.container .loader.two span:nth-child(1) {
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background: rgba(233, 30, 99, 0.05);
    border-radius: 50%;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 2;
}

.container .loader.two span:nth-child(2) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 50%;
    z-index: 1;
    overflow: hidden;
    animation: rotateCircle 1s linear infinite;
}

@keyframes rotateCircle {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.container .loader.two span:nth-child(2)::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 100%;
    height: 100%;
    background-color: #ff6198;

}
</style>