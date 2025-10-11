<template>
    <div class="loader">
        <div class="large">
            <div class="medium">
                <div class="small">
                    <div class="dot"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoadingAni42"
}
</script>

<style scoped>
.dot {
    width: 10px;
    height: 10px;
    background: #f00;
    border-radius: 50%;
}
.small {
    display: inline-block;
    padding: 10px;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    border-bottom: 2px solid #e3e3e3;
    border-left: 2px solid #e3e3e3;
    border-radius: 50%;
    animation: small 1s linear infinite;
}
.medium {
    display: inline-block;
    padding: 10px;
    border-top: 2px solid #e3e3e3;
    border-right: 2px solid #e3e3e3;
    border-bottom: 2px solid transparent;
    border-left: 2px solid transparent;
    border-radius: 50%;
    animation: medium 1s linear infinite;
}
.large {
    display: inline-block;
    padding: 10px;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    border-bottom: 2px solid #e3e3e3;
    border-left: 2px solid #e3e3e3;
    border-radius: 50%;
    animation: large 1s linear infinite;
}
@keyframes small {
    0% {
        transform: rotate(720deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
@keyframes medium {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(720deg);
    }
}
@keyframes large {
    0% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
</style>