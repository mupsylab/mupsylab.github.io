<template>
    <div class="loader">
        <ul>
            <li data-title="L">L</li>
            <li data-title="O">O</li>
            <li data-title="A">A</li>
            <li data-title="D">D</li>
            <li data-title="I">I</li>
            <li data-title="N">N</li>
            <li data-title="G">G</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "LoadingAni40"
}
</script>

<style scoped>
ul {
    display: flex;
    width: 400px;
    border: 4px solid #ff0;
    transform: skew(-25deg);
    box-shadow: 0px 20px 10px rgba(0, 0, 0, .2);
}
ul li {
    font-family: verdana;
    position: relative;
    list-style: none;
    width: 80px;
    height: 80px;
    background: #ff0;
    font-size: 3em;
    color: rgba(0, 0, 0, .1);
    text-align: center;
    line-height: 80px;
    box-sizing: border-box;
    overflow: hidden;
    margin: 0 -1px;
}

ul li::before {
    content: attr(data-title);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #262626;
    animation: animate 2s linear infinite;
}
@keyframes animate {
    0% {
        top: -100%;
    }
    20% {
        top: 0%;
        background: transparent;
        color: #262626;
    }
    40% {
        top: 0%;
        background: #262626;
        color: #ff0;
    }
    60% {
        top: 0%;
        background: transparent;
        color: #262626;
    }
    80% {
        top: -20%;
        background: transparent;
        color: #262626;
    }
    100% {
        top: 100%;
    }
}

ul li:nth-child(1)::before { animation-delay: 0s; }
ul li:nth-child(2)::before { animation-delay: .1s; }
ul li:nth-child(3)::before { animation-delay: .2s; }
ul li:nth-child(4)::before { animation-delay: .3s; }
ul li:nth-child(5)::before { animation-delay: .4s; }
ul li:nth-child(6)::before { animation-delay: .5s; }
ul li:nth-child(7)::before { animation-delay: .6s; }
</style>