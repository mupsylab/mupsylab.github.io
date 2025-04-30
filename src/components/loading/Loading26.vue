<template>
    <div class="container">
        <div class="square">
            <div class="circle">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoadingAni26"
}
</script>

<style scoped>
.square {
    width: 80px;
    height: 80px;
    background: #fff;
    padding: 20px;
    box-sizing: border-box;
    animation: square 2s infinite;
}

@keyframes square {
    0% {
        transform: rotate(0deg) scale(1) translateX(0);
        border-radius: 0;
        background: #fff;
    }

    25% {
        transform: rotate(360deg) scale(.5) translateX(50px);
        border-radius: 50%;
        background: #f00;
    }

    50% {
        transform: rotate(360deg) scale( .5) translateX(0);
        border-radius: 50%;
        background: #f00;
    }

    75% {
        transform: rotate(360deg) scale( .5) translateX(-50px);
        border-radius: 50%;
        background: #f00;
    }

    100% {
        transform: rotate(720deg) scale(1) translateX(0);
        border-radius: 0%;
        background: #fff;
    }
}

.circle {
    width: 40px;
    height: 40px;
    background: #262626;
    animation: circle 2s infinite;
}

@keyframes circle {
    0% {
        transform: rotate(0deg) scale(.5) translateX(0);
        border-radius: 50%;
        background: #fff;
    }

    50% {
        transform: rotate(-720deg) scale(1.5) translateX(50px);
        border-radius: 0%;
        background: #fff;
    }

    100% {
        transform: rotate(-1440deg) scale(.5) translateX(0);
        border-radius: 50%;
        background: #fff;
    }
}
</style>