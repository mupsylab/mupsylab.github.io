<template>
    <div class="loader">
        <ul class="circle1">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="circle2">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "LoadingAni32"
}
</script>

<style scoped>
ul {
    position: absolute;
    margin: 0;
    padding: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 10px solid #ccc;
    border-top: 10px solid #f39c12;
    border-left: 10px solid #d35400;
    border-bottom: 10px solid #f39c12;
    border-right: 10px solid #d35400;
    border-width: 50px;
    box-shadow: 0 0 50px rgba(0, 0, 0, .5);
    overflow: hidden;
}

li {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    list-style: none;
    z-index: -1;
}

li:nth-child(1) {
    background: #f1c40f;
    transform: translate(-50%, -50%);
}
li:nth-child(2) {
    background: #e67e22;
    transform: translate(50%, -50%);
}
li:nth-child(3) {
    background: #e74c3c;
    transform: translate(-50%, 50%);
}
li:nth-child(4) {
    background: #c0392b;
    transform: translate(50%, 50%);
}

ul.circle1 {
    animation: animateOne linear 6s infinite;
    z-index: 1;
}
ul.circle2 {
    animation: animateTwo linear 3s infinite;
    z-index: 2;
}
@keyframes animateOne {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
@keyframes animateTwo {
    0% {
        transform: translate(-50%, -50%) rotate(360deg) scale(.4);
    }
    100% {
        transform: translate(-50%, -50%) rotate(0deg) scale(.4);
    }
}
</style>