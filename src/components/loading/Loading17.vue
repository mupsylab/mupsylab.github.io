<template>
    <div class="loader">
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script>
export default {
    name: "LoadingAni999"
}
</script>

<style scoped>
.loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
    perspective: 600px;
    background: #fff;
}

.loader span {
    position: absolute;
    border: 10px solid #262626;
    border-radius: 4px;
}
.loader span::before {
    content: '';
    position: absolute;
    bottom: -10px;
    right: -10px;
    width: 10px;
    height: 50%;
    background: #ff0;
}
.loader span:after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 10px;
    height: 50%;
    background: #ff0;
}

.loader span:nth-child(1) {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    animation: animate 8s linear infinite;
}
@keyframes animate {
    0% {
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(360deg);
    }
}

.loader span:nth-child(2) {
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    animation: animate 4s linear infinite;
}
.loader span:nth-child(3) {
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
    animation: animate 2s linear infinite;
}
</style>
