<template>
    <div class="container loader">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
    </div>
</template>

<script>
export default {
    name: "LoadingAni21"
}
</script>

<style scoped>
.loader {
    height: 40px;
    width: 200px;
}

.loader span {
    font-family: Arial;
    font-size: 24px;
    color: rgba(255, 255, 255, .1);
    display: inline-block;
    transition: all .5s;
    animation: animate 2s infinite;
}

.loader span:nth-child(1) {
    animation-delay: .1s;
}
.loader span:nth-child(2) {
    animation-delay: .2s;
}
.loader span:nth-child(3) {
    animation-delay: .3s;
}
.loader span:nth-child(4) {
    animation-delay: .4s;
}
.loader span:nth-child(5) {
    animation-delay: .5s;
}
.loader span:nth-child(6) {
    animation-delay: .6s;
}
.loader span:nth-child(7) {
    animation-delay: .7s;
}
@keyframes animate {
    0% {
        color: rgba(255, 255, 255, .1);
        transform: translateY(0);
        margin-left: 0;
    }
    25% {
        color: yellow;
        transform: translateY(-15px);
        margin-left: 10px;
        text-shadow: 0 15px 5px rgba(0, 0, 0, .1);
    }
    100% {
        color: rgba(255, 255, 255, .1);
        transform: translateY(0);
    }
}
</style>