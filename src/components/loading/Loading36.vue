<template>
    <div class="center">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
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
    name: "LoadingAni36"
}
</script>

<style scoped>
.center {
    height: 60px;
    width: 300px;
    border: 4px solid #262626;
    border-radius: 4px;
    overflow: hidden;
}
ul {
    margin: 0;
    padding: 0;
    display: flex;
    background: #ff0;
    height: 60px;
    width: 400px;
}
ul li {
    position: relative;
    list-style: none;
    width: 20px;
    height: 30px;
    background: #262626;
    margin: 0 10px;
    transform: skewX(35deg);
    animation: animate 2s linear infinite;
}
ul li::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 100%;
    background: #262626;
    transform: skewX(125deg) translateX(-28px);
}
@keyframes animate {
    0% {
        transform: skewX(35deg) translate(-100px);
    }
    100% {
        transform: skewX(35deg) translate(0px);
    }
}
</style>