<template>
    <div class="loader">
        <div class="box">
            <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoadingAni12"
}
</script>

<style scoped>
.loader {
    grid-column: 1 / 13;
    width: 100%;
    background: #607d8b;
    height: 400px;
}

.box {
    position: absolute;
    top: calc(50% - 100px);
    left: calc(50% - 135px);
    height: 200px;
    transform-style: preserve-3d;
    transform: perspective(1000px) rotateY(45deg);
}

.box div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    transform-style: preserve-3d;
}

.box div span {
    content: '';
    position: relative;
    display: block;
    width: 50px;
    height: 100%;
    background: linear-gradient(#e8e8e8, #a7a7a7, #e8e8e8);
    animation: animate 2.8s linear infinite;
}

.box div span::before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background: #000;
    transform-style: preserve-3d;
    transform: translateX(-25px) scaleY(0.5);
}

.box div span:nth-child(1) {
    animation-delay: 0s;
}

.box div span:nth-child(2) {
    animation-delay: 0.2s;
}

.box div span:nth-child(3) {
    animation-delay: 0.4s;
}

.box div span:nth-child(4) {
    animation-delay: 0.6s;
}

.box div span:nth-child(5) {
    animation-delay: 0.8s;
}

.box div span:nth-child(6) {
    animation-delay: 1s;
}

.box div span:nth-child(7) {
    animation-delay: 1.2s;
}

.box div span:nth-child(8) {
    animation-delay: 1.4s;
}

.box div span:nth-child(9) {
    animation-delay: 1.6s;
}

@keyframes animate {
    0% {
        transform: rotateX(0deg);
    }

    100% {
        transform: rotateX(360deg);
    }
}
</style>