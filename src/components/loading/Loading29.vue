<template>
    <div class="loader">
        <div class="loading"></div>
    </div>
</template>

<script>
export default {
    name: "LoadingAni29"
}
</script>

<style scoped>
.loading {
    width: 500px;
    height: 300px;
}
/* .loading:before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #262626;
    z-index: 1;
} */

.loading:after {
    content: "";
    position: absolute;
    display: block;
    top: 50%;
    left: 33.3%;
    width: 33.3%;
    height: 1px;
    background: #fff;
    z-index: 2;
    transform-origin: left;
    transform: scaleX(0);
    animation: animate 2s infinite alternate;
}
@keyframes animate {
    0% {
        transform: translateX(0) scaleX(0);
        transform-origin: left;
        left: 33.3%;
        right: auto;
    }
    45% {
        transform: translateX(0) scaleX(1);
        transform-origin: left;
        left: 33.3%;
        right: auto;
    }
    50% {
        transform: translateX(0) scaleX(1);
        transform-origin: right;
        left: auto;
        right: 33.3%;
    }
    100% {
        transform: translateX(0) scaleX(0);
        transform-origin: right;
        left: auto;
        right: 33.3%;
    }
}
</style>