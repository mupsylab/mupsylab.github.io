<template>
    <div class="loader">
        <ul>
            <li style="animation-delay: 0s;">L</li>
            <li style="animation-delay: .2s;">O</li>
            <li style="animation-delay: .4s;">A</li>
            <li style="animation-delay: .6s;">D</li>
            <li style="animation-delay: .8s;">I</li>
            <li style="animation-delay: 1s;">N</li>
            <li style="animation-delay: 1.2s;">G</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "LoadingAni45"
}
</script>

<style scoped>
.loader {
    grid-column: 1 / 13;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-weight: bold;
}

.loader ul {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
}

ul li {
    list-style: none;
    font-size: 5em;
    letter-spacing: 20px;
    animation: animate 3s linear infinite;
}

@keyframes animate {
    0% {
        transform: translateX(-50px);
        letter-spacing: 20px;
        opacity: 0;
        color: #f00;
    }
    10% {
        opacity: 1;
    }
    50% {
        letter-spacing: -20px;
    }
    100% {
        transform: translateX(50px);
        letter-spacing: 20px;
        opacity: 0;
        color: #00f;
    }
}
</style>