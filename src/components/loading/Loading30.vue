<template>
    <div class="loader">
        <ul>
            <li>T</li>
            <li>U</li>
            <li>B</li>
            <li>E</li>
            <li>L</li>
            <li>I</li>
            <li>G</li>
            <li>H</li>
            <li>T</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "LoadingAni30"
}
</script>

<style scoped>
ul {
    display: flex;
}
ul li {
    list-style: none;
    font-family: arial;
    font-size: 5em;
    letter-spacing: 15px;
    color: #484848;
    text-shadow: none;
    animation: animate 1s infinite linear;
}
@keyframes animate {
    0% {
        color: #484848;
        text-shadow: none;
    }
    10% {
        color: #484848;
        text-shadow: none;
    }
    20% {
        color: #fff900;
        text-shadow: 0 0 7px #fff900,
                     0 0 20px #ff6c00;
    }
    30% {
        color: #484848;
        text-shadow: none;
    }
    35% {
        color: #fff900;
        text-shadow: 0 0 7px #fff900,
                     0 0 20px #ff6c00;
    }
    70% {
        color: #484848;
        text-shadow: none;
    }
    85% {
        color: #fff900;
        text-shadow: 0 0 7px #fff900,
                     0 0 20px #ff6c00;
    }
    90%, 100% {
        color: #484848;
        text-shadow: none;
    }
}

ul li:nth-child(1){ animation-delay: .2s; }
ul li:nth-child(2){ animation-delay: .4s; }
ul li:nth-child(3){ animation-delay: .6s; }
ul li:nth-child(4){ animation-delay: .8s; }
ul li:nth-child(5){ animation-delay: 1s; }
ul li:nth-child(6){ animation-delay: 1.2s; }
ul li:nth-child(7){ animation-delay: 1.4s; }
ul li:nth-child(8){ animation-delay: 1.6s; }
ul li:nth-child(9){ animation-delay: 1.8s; }
</style>