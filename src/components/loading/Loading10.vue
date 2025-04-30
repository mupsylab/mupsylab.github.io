<template>
    <div class="box">
        <svg>
            <path>

            </path>
        </svg>
        <svg>
            <path>

            </path>
        </svg>
    </div>
</template>

<script>
export default {
    name: "LoadingAni999"
}
</script>

<style scoped>
.box {
    grid-column: 1 / 13;
}
svg {
    fill: none;
    width: 100%;
}

svg:nth-child(2) {
    filter: blur(40px);
}

svg path {
    d: path("M0,25, C150,110 150,-60 300,25");
    stroke: #ff0092;
    stroke-width: 50;
    stroke-linecap: round;
    transform: translate(15%, 50%);
    animation: animate 2s ease-in-out infinite;
}

@keyframes animate {
    0% {
        stroke: #ff0092;
        d: path("M0,25, C150,110 150,-60 300,25");
    }

    50% {
        stroke: #00ff00;
        d: path("M0,25 C160,-50 140,110 300,25");
    }
}
</style>