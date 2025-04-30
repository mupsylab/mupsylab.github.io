<template>
    <div class="loader">
        <ul>
            <li>L</li>
            <li>O</li>
            <li>A</li>
            <li>D</li>
            <li>I</li>
            <li>N</li>
            <li>G</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "LoadingAni28"
}
</script>

<style scoped>
ul {
    width: 600px;
}
ul li {
    list-style: none;
    float: left;
    background: #ff85e4;
    padding: 15px 20px;
    font-size: 20px;
    margin: 10px;
    color: #fff;
    animation: animate 1s infinite alternate;
    -webkit-perspective: 500px;
}
@keyframes animate {
    from {
        transform: scale(1) translateY(0) rotateX(0deg);
        box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }
    to {
        transform: scale(1.35) translateY(-25px) rotateX(45deg);
        box-shadow: 0 30px 5px rgba(0, 0, 0, 0.1);
    }
}
ul li:nth-child(1) {
    animation-delay: .1s;
}
ul li:nth-child(2) {
    animation-delay: .2s;
}
ul li:nth-child(3) {
    animation-delay: .3s;
}
ul li:nth-child(4) {
    animation-delay: .4s;
}
ul li:nth-child(5) {
    animation-delay: .5s;
}
ul li:nth-child(6) {
    animation-delay: .6s;
}
ul li:nth-child(7) {
    animation-delay: .7s;
}
ul li:nth-child(8) {
    animation-delay: .8s;
}
</style>