<template>
    <h2 data-text="Create...">Create...</h2>
</template>

<script>
export default {
    name: 'LoadingAni3'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

*
{
    font-family: 'Poppins', sans-serif;
}

h2
{
    grid-column: 1 / 13;
    position: relative;
    font-size: 14vh;
    line-height: 14vh;
    color: #252839;
    -webkit-text-stroke: 0.3vw #383d52;
    text-transform: uppercase;
    text-align: left;
}
h2::before
{
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    color: #01fe87;
    -webkit-text-stroke: 0vw #383d52;
    border-right: 2px solid #01fe87;
    overflow: hidden;
    animation: animate 6s linear infinite;
}
@keyframes animate {
    0%, 10%, 100%
    {
        width: 0;
    }
    70%, 90%
    {
        width: 100%;
    }
}
</style>