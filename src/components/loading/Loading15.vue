<template>
    <div class="loader">
        <ul class="radar">
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
    name: "LoadingAni999"
}
</script>

<style scoped>
.radar {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    width: 480px;
    height: 480px;
    border-radius: 50%;
    border: 20px solid #f7f7f7;
    background: #000000;
    background-size: cover;
    box-shadow: 0 8px 0 #c5c5c5,
        inset 0 0 100px rgba(0, 255, 0, .5);
    overflow: hidden;
}

.radar:before {
    content: '';
    position: absolute;
    top: 80%;
    left: 55%;
    width: 10px;
    height: 10px;
    background: #00ff00;
    border-radius: 50%;
    filter: blur(2px);
    animation: glow 1s linear infinite;
}

.radar:after {
    content: '';
    position: absolute;
    top: 70%;
    left: 20%;
    width: 10px;
    height: 10px;
    background: #00ff00;
    border-radius: 50%;
    filter: blur(2px);
    animation: glow 1s linear infinite;
}

@keyframes glow {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.radar li:nth-child(1),
.radar li:nth-child(2),
.radar li:nth-child(3),
.radar li:nth-child(4) {
    list-style: none;
    position: absolute;
    top: 50%;
    height: 1px;
    width: 100%;
    background: rgba(0, 255, 0, 1);
    border-radius: 50%;
}

.radar li:nth-child(2) {
    transform: rotate(90deg);
}

.radar li:nth-child(3) {
    transform: rotate(45deg);
}

.radar li:nth-child(4) {
    transform: rotate(-45deg);
}

.radar li:nth-child(5),
.radar li:nth-child(6),
.radar li:nth-child(7) {
    list-style: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(0, 255, 0, 1);
    background: transparent;
    border-radius: 50%;
}

.radar li:nth-child(5) {
    width: 120px;
    height: 120px;
}

.radar li:nth-child(6) {
    width: 240px;
    height: 240px;
}

.radar li:nth-child(7) {
    width: 360px;
    height: 360px;
}

.radar li:nth-child(8) {
    list-style: none;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 250px;
    height: 250px;
    transform-origin: top left;
    background: linear-gradient(45deg, #00ff00 0%, transparent 50%);
    animation: animate 2s linear infinite;
}

@keyframes animate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>