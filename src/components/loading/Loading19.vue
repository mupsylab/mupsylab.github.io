<template>
    <div class="loader">
        <h1>
            <span>J</span>
            <span>U</span>
            <span>M</span>
            <span>P</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
        </h1>
    </div>
</template>

<script>
export default {
    name: "LoadingAni999"
}
</script>

<style scoped>
h1 {
    margin: 0;
    padding: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

h1 span {
    color: #262626;
    background: #fff;
    padding: 10px 20px;
    font-family: arial;
    display: table-cell;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, .3), 0 5px 0 #ccc;
    animation: animate .5s infinite;
}
@keyframes animate {
    0% {
        transform: translateY(0px);
        box-shadow: inset 0 0 5px rgba(0, 0, 0, .3), 0 5px 0 #ccc,
                    0 15px 5px rgba(0, 0, 0, 0);
    }
    50% {
        transform: translateY(-20px);
        box-shadow: inset 0 0 5px rgba(0, 0, 0, .3), 0 5px 0 #ccc,
                    0 15px 5px rgba(0, 0, 0, 0.6);
    }
    100% {
        transform: translateY(0px);
        box-shadow: inset 0 0 5px rgba(0, 0, 0, .3), 0 5px 0 #ccc,
                    0 15px 5px rgba(0, 0, 0, 0);
    }
}

h1 span:nth-child(1) {
    animation-delay: .2s;
}
h1 span:nth-child(2) {
    animation-delay: .4s;
}
h1 span:nth-child(3) {
    animation-delay: .6s;
}
h1 span:nth-child(4) {
    animation-delay: .8s;
}
h1 span:nth-child(5) {
    animation-delay: 1s;
}
h1 span:nth-child(6) {
    animation-delay: 1.2s;
}
h1 span:nth-child(7) {
    animation-delay: 1.4s;
}
</style>