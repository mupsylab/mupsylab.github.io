<template>
    <div class="loader">
        <span style="--i:1"></span>
        <span style="--i:2"></span>
        <span style="--i:3"></span>
        <span style="--i:4"></span>
        <span style="--i:5"></span>
        <span style="--i:6"></span>
        <span style="--i:7"></span>
        <span style="--i:8"></span>
        <span class="rotate" style="--j:0"></span>
        <span class="rotate" style="--j:1"></span>
        <span class="rotate" style="--j:2"></span>
        <span class="rotate" style="--j:3"></span>
        <span class="rotate" style="--j:4"></span>
    </div>
    <svg>
        <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10"/>
            <feColorMatrix values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 20 -10"></feColorMatrix>
        </filter>
    </svg>
</template>

<script>
export default {
    name: 'LoadingAni7'
}
</script>

<style scoped>
.loader
{
    grid-column: 1 / 13;
    position: relative;
    width: 250px;
    height: 250px;
    margin: auto;
    filter: url(#gooey);
    animation: animate 16s ease-in-out infinite;
}
.loader span
{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    transform: rotate(calc(45deg * var(--i)));
}
.loader span::before
{
    content: '';
    position: absolute;
    top: 0;
    left: calc(50% - 20px);
    width: 40px;
    height: 40px;
    background: linear-gradient(45deg, #c7eeff, #03a9f4);
    border-radius: 50%;
    box-shadow: 0 0 30px #00bcd4
}

.rotate
{
    animation: animate 4s ease-in-out infinite;
    animation-delay: calc(-0.2s * var(--j));
}
@keyframes animate
{
    0%
    {
        transform: rotate(0deg);
    }
    100%
    {
        transform: rotate(360deg);
    }
}
svg{
    width: 0;
    height: 0;
}
</style>