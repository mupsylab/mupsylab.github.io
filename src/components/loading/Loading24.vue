<template>
    <div class="loader">
        <ul>
            <li>L</li>
            <li>O</li>
            <li>A</li>
            <li>D</li>
            <li>I</li>
            <li>N</li>
            <li>G</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "LoadingAni24"
}
</script>

<style scoped>
ul {
    width: 400px;
}
ul li {
    list-style: none;
    float: left;
    font-family: arial;
    font-size: 5em;
    color: #fff;
    font-weight: bold;
    /* transform: rotateY(90deg); */
    transform-origin: left;
    animation: animate 3s infinite;
}
@keyframes animate {
    0% {
        opacity: 0;
        transform: rotateY(90deg) translateX(-30px);
    }
    50% {
        opacity: 1;
        transform: rotateY(0deg) translateX(30px) scale(0.4);
    }
    100% {
        opacity: 0;
        transform: rotateY(0deg);
    }
}
ul li:nth-child(1) {
    animation-delay: 0s;
}
ul li:nth-child(2) {
    animation-delay: 0.2s;
}
ul li:nth-child(3) {
    animation-delay: 0.4s;
}
ul li:nth-child(4) {
    animation-delay: 0.6s;
}
ul li:nth-child(5) {
    animation-delay: 0.8s;
}
ul li:nth-child(6) {
    animation-delay: 1s;
}
ul li:nth-child(7) {
    animation-delay: 1.2s;
}
</style>