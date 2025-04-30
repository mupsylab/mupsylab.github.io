<template>
    <div class="loader">
        <ul>
            <li data-attr="L"></li>
            <li data-attr="O"></li>
            <li data-attr="A"></li>
            <li data-attr="D"></li>
            <li data-attr="I"></li>
            <li data-attr="N"></li>
            <li data-attr="G"></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "LoadingAni44"
}
</script>

<style scoped>
ul {
    display: flex;
    overflow: hidden;
}
ul li {
    position: relative;
    list-style: none;
    width: 150px;
    height: 150px;
    border: 1px solid #262626;
    background: #262626;
    box-shadow: 0 0 15px rgba(0,0,0,.1);
}
ul li:before {
    content: attr(data-attr);
    display: inline-block;
    text-align: center;
    line-height: 150px;
    font-size: 80px;
    font-family: verdana;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 15px rgba(0, 0, 0, 1);
    background: #ff0;
    animation: animate 1.5s linear infinite;
    position: absolute;
    top: 0;
    left: 0;
}
@keyframes animate {
    0% {
        transform: scale(1);
        top: -100%;
    }
    30% {
        transform: scale(.5);
        top: 0%;
    }
    70% {
        transform: scale(.5);
        top: 0%;
    }
    100% {
        transform: scale(.2);
        top: 100%;
    }
}
ul li:nth-child(1):before { animation-delay: 0; }
ul li:nth-child(2):before { animation-delay: .1s; }
ul li:nth-child(3):before { animation-delay: .2s; }
ul li:nth-child(4):before { animation-delay: .3s; }
ul li:nth-child(5):before { animation-delay: .4s; }
ul li:nth-child(6):before { animation-delay: .5s; }
ul li:nth-child(7):before { animation-delay: .6s; }
</style>