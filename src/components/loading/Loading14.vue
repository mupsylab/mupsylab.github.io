<template>
    <div class="loader">
        <div class="face face1">
            <dic class="circle"></dic>
        </div>
        <div class="face face2">
            <dic class="circle"></dic>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoadingAni14"
}
</script>

<style scoped>
.loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    box-sizing: border-box;
    background: #000;
}

.loader .face {
    position: absolute;
    border: 2px solid #121212;
}

.loader .face.face1 {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #090909;
    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
    border-radius: 50%;
    border-left: 2px solid #ffff00;
    border-top: 2px solid #ffff00;
    animation: animate 3s linear infinite;
}

.loader .face.face2 {
    top: 30px;
    left: 30px;
    right: 30px;
    bottom: 30px;
    background: #090909;
    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
    border-radius: 50%;
    border-right: 2px solid #03a9f4;
    border-bottom: 2px solid #03a9f4;
    animation: animate 3s linear reverse infinite;
}

.loader .face .circle {
    position: absolute;
    top: calc(50% - 1px);
    left: 50%;
    width: 50%;
    height: 2px;
    transform-origin: left;
    /* transform: translate(-50%, -50%); */
    /* background: #fff; */
}

.loader .face.face1 .circle {
    transform: rotate(-45deg);
}

.loader .face.face2 .circle {
    transform: rotate(-45deg);
}

.loader .face .circle:before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    top: -4px;
    right: -6px;
}

.loader .face.face1 .circle:before {
    background: #ffff00;
    box-shadow: 0 0 20px #ff0,
        0 0 40px #ff0,
        0 0 60px #ff0,
        0 0 80px #ff0,
        0 0 100px #ff0,
        0 0 0 5px rgba(255, 255, 0, .1);
}

.loader .face.face2 .circle:before {
    background: #03a9f4;
    box-shadow: 0 0 20px #03a9f4,
        0 0 40px #03a9f4,
        0 0 60px #03a9f4,
        0 0 80px #03a9f4,
        0 0 100px #03a9f4,
        0 0 0 5px rgba(3, 169, 244, .1);
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