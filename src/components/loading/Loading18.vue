<template>
    <div class="container">
        <div class="Loading">

        </div>
    </div>
</template>

<script>
export default {
    name: "LoadingAni999"
}
</script>

<style scoped>
.container {
    grid-column: 1 / 13;
    width: 500px;
    margin: 280px auto;
    position: relative;
    padding: 20px 40px;
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: 0 10px 20px rgba(0, 0, 0, .5);
}
.Loading {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 10px;
    background: #f1f1f1;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, .2);
    border-bottom: 4px;
    overflow: hidden;
}
.Loading:after {
    content: '';
    position: absolute;
    left: 0;
    width: 0%;
    height: 100%;
    border-radius: 4px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, .2);
    animation: load infinite 5s;
}

@keyframes load {
    0% {
        width: 0%;
        background: #f00;
    }
    50% {
        width: 70%;
        background: #00f;
    }
    100% {
        width: 100%;
        background: #0f0;
    }
}
</style>