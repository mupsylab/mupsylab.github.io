<template>
    <div class="loader">
        <ul>
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
    name: "LoadingAni34"
}
</script>

<style scoped>
ul {
    display: flex;
}
ul li {
    list-style: none;
    width: 6px;
    height: 20px;
    background: #262626;
    margin: 0 4px;
    animation: animate .7s infinite alternate;
}
@keyframes animate {
    0% {
        transform: scaleY(1);
    }
    25% {
        transform: scaleY(1);
    }
    50% {
        transform: scaleY(1);
    }
    75% {
        transform: scaleY(1);
    }
    100% {
        transform: scaleY(3);
    }
}
ul li:nth-child(1) { animation-delay: .1s; }
ul li:nth-child(2) { animation-delay: .2s; }
ul li:nth-child(3) { animation-delay: .3s; }
ul li:nth-child(4) { animation-delay: .4s; }
ul li:nth-child(5) { animation-delay: .5s; }
ul li:nth-child(6) { animation-delay: .6s; }
</style>