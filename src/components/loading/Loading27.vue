<template>
    <div class="loader">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "LoadingAni27"
}
</script>

<style scoped>
ul {
    margin: 0;
    padding: 0;
    position: absolute;
    left: 40%;
    top: 20%;
}
ul li {
    list-style: none;
    width: 200px;
    height: 200px;
    position: absolute;
    top: 0;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, .5);
    transform-origin: bottom center;
    animation: animate 7s linear infinite;
}
@keyframes animate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(359deg);
    }
}
ul li:nth-child(1) {
    animation-delay: 0s;
    background: rgba(214, 188, 211, .8);
}
ul li:nth-child(2) {
    animation-delay: 1s;
    background: rgba(216, 134, 167, .8);
}
ul li:nth-child(3) {
    animation-delay: 2s;
    background: rgba(177, 101, 212, .8);
}
ul li:nth-child(4) {
    animation-delay: 3s;
    background: rgba(123, 77, 197, .8);
}
ul li:nth-child(5) {
    animation-delay: 4s;
    background: rgba(253, 143, 232, .8);
}
ul li:nth-child(6) {
    animation-delay: 5s;
    background: rgba(251, 125, 195, .8);
}
ul li:nth-child(7) {
    animation-delay: 6s;
    background: rgba(229, 103, 154, .8);
}
ul li:nth-child(8) {
    animation-delay: 7s;
    background: rgba(48, 83, 144, .4);
}
</style>