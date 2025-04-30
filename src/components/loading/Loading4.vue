<template>
    <div class="container">
        <div class="box">
            <div class="cube">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoadingAni4'
}
</script>

<style scoped>
.container
{
    grid-column: 1 / 13;
    position: relative;
    width: 100%;
    transform: rotate(-30deg) translateY(150px);
}
.container .box
{
    position: relative;
    left: -200px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% + 400px);
    /* height: 400px; */
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
    animation: animateSurface 1.5s ease-in-out infinite;
}
@keyframes animateSurface
{
    0%
    {
        transform: translateX(0px);
    }
    100%
    {
        transform: translateX(-200px);
    }
}
.container .box .cube
{
    position: relative;
    width: 200px;
    height: 200px;
    background: #03e9f4;
    box-shadow: 0 0 5px rgba(3, 233, 244, 1),
                0 0 25px rgba(3, 233, 244, 1),
                0 0 50px rgba(3, 233, 244, 1),
                0 0 100px rgba(3, 233, 244, 1),
                0 0 200px rgba(3, 233, 244, 0.5),
                0 0 300px rgba(3, 233, 244, 0.5);
    transform-origin: bottom right;
    animation: animate 1.5s ease-in-out infinite;
}
@keyframes animate {
    0%
    {
        transform: rotate(0deg);
    }
    60%
    {
        transform: rotate(90deg);
    }
    65%
    {
        transform: rotate(85deg);
    }
    70%
    {
        transform: rotate(90deg);
    }
    75%
    {
        transform: rotate(87.5deg);
    }
    80%, 100%
    {
        transform: rotate(90deg);
    }
}
</style>