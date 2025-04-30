<template>
    <div class="body">
        <div class="square">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoadingAni9"
}
</script>

<style scoped>
.body {
    width: 200px;
    height: 200px;
    background: linear-gradient(45deg, #cfffd0, #3fff46);
    display: flex;
    align-items: center;
}
.square {
    position: relative;
    width: 100px;
    height: 100px;
    /* background: #000; */
    margin: auto;
    overflow: hidden;
    animation: rotate 4s linear infinite;
    border: 10px dashed rgba(0, 0, 0, .2);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, .5),
                inset 0 0 0 10px rgba(0, 0, 0, .4);
}
@keyframes rotate {
    0%
    {
        transform: rotate(360deg);
    }
    100%
    {
        transform: rotate(0deg);
    }
}

.square span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
}
.square span:before
{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-top: 10px solid #fff;
    animation: animate 2s linear infinite;
}
@keyframes animate
{
    0%
    {
        left: -100%;
    }
    25%
    {
        left: 0;
    }
    50%,100%
    {
        left: 100%;
    }
}
.square span:nth-child(1)
{
    transform: rotate(0deg);
}
.square span:nth-child(2)
{
    transform: rotate(90deg);
}
.square span:nth-child(3)
{
    transform: rotate(180deg);
}
.square span:nth-child(4)
{
    transform: rotate(270deg);
}
.square span:nth-child(1):before
{
    animation-delay: 0s;
}
.square span:nth-child(2):before
{
    animation-delay: 0.5s;
}
.square span:nth-child(3):before
{
    animation-delay: 1s;
}
.square span:nth-child(4):before
{
    animation-delay: 1.5s;
}
</style>