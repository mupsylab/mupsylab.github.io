<template>
    <div class="loader">
        <ul>
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
    name: "LoadingAni999"
}
</script>

<style scoped>
ul {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    display: flex;
}

ul li {
    list-style: none;
    width: 20px;
    height: 20px;
    background: #cea321;
    margin: 0 5px;
    border-radius: 50%;
    animation: animate 1.4s linear infinite;
}

@keyframes animate {
    0% {
        /* transform: translateY(0); */
        transform: translateX(0);
    }

    60% {
        /* transform: translateY(0); */
        transform: translateX(0);
    }

    80% {
        /* transform: translateY(-20px); */
        transform: translateX(-10px);
    }

    100% {
        /* transform: translateY(0px); */
        transform: translateX(0px);
    }
}

ul li:nth-child(1) {
    animation-delay: 0;
}

ul li:nth-child(2) {
    animation-delay: -1.2s;
}

ul li:nth-child(3) {
    animation-delay: -1s;
}

ul li:nth-child(4) {
    animation-delay: -0.8s;
}

ul li:nth-child(5) {
    animation-delay: -0.6s;
}
</style>