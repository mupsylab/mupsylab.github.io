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
    name: 'LoadingAni6'
}
</script>

<style scoped>
.loader {
    grid-column: 1 / 13;
    position: relative;
    width: 200px;
    height: 200px;
    overflow: hidden;
    margin: auto;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
}

.loader:hover {
    background: #03e9f4;
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 200px #03e9f4;
}
.loader span
{
    position: absolute;
    display: block;
}

.loader span:nth-child(1)
{
    top: 0;
    left: -100%;
    width: 100%;
    height: 40px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: animate1 1s linear infinite;
    animation-delay: 0s;
}
@keyframes animate1
{
    0%
    {
        left: -100%;
    }
    100%
    {
        left: 100%;
    }
}
.loader span:nth-child(3)
{
    bottom: 0;
    left: 100%;
    width: 100%;
    height: 40px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: animate3 1s linear infinite;
    animation-delay: 0s;
}
@keyframes animate3
{
    0%
    {
        left: 100%;
    }
    100%
    {
        left: -100%;
    }
}
.loader span:nth-child(2)
{
    right: 0;
    top: -100%;
    width: 40px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: animate2 1s linear infinite;
    animation-delay: 0.5s;
}
@keyframes animate2
{
    0%
    {
        top: -100%;
    }
    100%
    {
        top: 100%;
    }
}
.loader span:nth-child(4)
{
    left: 0;
    top: 100%;
    width: 40px;
    height: 100%;
    background: linear-gradient(0deg, transparent, #03e9f4);
    animation: animate4 1s linear infinite;
    animation-delay: 0.5s;
}
@keyframes animate4
{
    0%
    {
        top: 100%;
    }
    100%
    {
        top: -100%;
    }
}
</style>