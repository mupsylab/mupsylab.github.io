<template>
    <div class="loader">
        <ul>
            <li>L</li>
            <li>o</li>
            <li>a</li>
            <li>d</li>
            <li>i</li>
            <li>n</li>
            <li>g</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "LoadingAni13"
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
    color: #484848;
    font-family: arial;
    font-size: 5em;
    letter-spacing: 15px;
    animation: animate 1.4s linear infinite;
}

@keyframes animate {
    0% {
        color: #484848;
        text-shadow: none;
    }

    90% {
        color: #484848;
        text-shadow: none;
    }

    100% {
        color: #fff900;
        text-shadow: 0 0 7px #fff900, 0 0 50px #ff6c00;
    }
}

ul li:nth-child(1) {
    animation-delay: .2s;
}

ul li:nth-child(2) {
    animation-delay: .4s;
}

ul li:nth-child(3) {
    animation-delay: .6s;
}

ul li:nth-child(4) {
    animation-delay: .8s;
}

ul li:nth-child(5) {
    animation-delay: 1s;
}

ul li:nth-child(6) {
    animation-delay: 1.2s;
}

ul li:nth-child(7) {
    animation-delay: 1.4s;
}
</style>