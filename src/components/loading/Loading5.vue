<template>
    <div class="loader">
        <div style="--i:0"></div>
        <div style="--i:1"></div>
        <div style="--i:2"></div>
        <div style="--i:3"></div>
        <div style="--i:4"></div>
    </div>
</template>

<script>
export default {
    name: 'LoadingAni5'
}
</script>

<style scoped>
.loader
{
    grid-column: 1 / 13;
    display: flex;
    flex-direction: row;
    background: #fff;
}
.loader div
{
    position: relative;
    width: 40px;
    height: 200px;
    margin: 20px;
    overflow: hidden;
    border-radius: 40px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.05, #edf1f4));
    border: 2px solid #edf1f4;
    box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.1),
                -15px -15px 20px #fff,
                inset -5px -5px 5px rgba(255, 255, 255, 0.5),
                inset 5px 5px 5px rgba(0, 0, 0, 0.05);
}
.loader div::before
{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    border-radius: 40px;
    box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.1),
                -15px -15px 20px #fff,
                inset -5px -5px 5px rgba(255, 255, 255, 0.5),
                inset 5px 5px 5px rgba(0, 0, 0, 0.05);
}

.loader div::after
{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 36px;
    height: 36px;
    background: #fff;
    border-radius: 50%;
    box-shadow: inset -5px -5px 5px rgba(0, 0, 0, 0.2),
                0 420px 0 400px #2196f3;
    animation: animate 2.5s ease-in-out infinite;
    transform: translateY(160px);
    animation-delay: calc(-0.5s * var(--i));
}
@keyframes animate {
    0%
    {
        transform: translateY(160px);
        filter: hue-rotate(180deg);
    }
    50%
    {
        transform: translateY(0px);
    }
    100%
    {
        transform: translateY(160px);
    }
}
</style>