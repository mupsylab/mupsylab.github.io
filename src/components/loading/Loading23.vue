<template>
    <div class="container loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <h1>Loading</h1>
    </div>
</template>

<script>
export default {
    name: "LoadingAni23"
}
</script>

<style scoped>
.loader span {
    height: 15px;
    width: 15px;
    display: inline-block;
    border-radius: 50%;
    transition: all .5s;
    animation: animate 2s infinite;
}

.loader h1 {
    font-family: arial;
    color: #fff;
    margin: 0;
    padding: 0;
}

@keyframes animate {
    0% {
        border: 1px solid #fff;
        background: transparent;
        transform: translateY(0);
    }
    50% {
        border: 1px solid #fff;
        background: red;
        transform: translateY(-25px);
    }
    100% {
        border: 1px solid #fff;
        background: yellow;
        transform: translateY(0);
    }
}
.loader span:nth-child(1) {
    animation-delay: 0;
}
.loader span:nth-child(2) {
    animation-delay: 0.1s;
}
.loader span:nth-child(3) {
    animation-delay: 0.2s;
}
.loader span:nth-child(4) {
    animation-delay: 0.3s;
}
.loader span:nth-child(5) {
    animation-delay: 0.4s;
}
.loader span:nth-child(6) {
    animation-delay: 0.5s;
}
</style>