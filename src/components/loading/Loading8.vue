<template>
    <div class="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script>
export default {
    name: "LoadingAni8"
}
</script>

<style scoped>
.loader {
    grid-column: 1 / 13;
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
    margin: auto;
    animation: animate 0.5s linear infinite;
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
.loader span 
{
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
    left: 0;
}
.loader span:nth-child(1)
{
    filter: blur(5px)
}
.loader span:nth-child(2)
{
    filter: blur(10px)
}
.loader span:nth-child(3)
{
    filter: blur(25px)
}
.loader span:nth-child(4)
{
    filter: blur(50px)
}
.loader::after
{
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background: #240229;
    border-radius: 50%;

}
</style>