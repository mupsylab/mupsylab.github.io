<script setup lang="ts">
const cards = [
    { id: 1, color: "#f87171", title: "Card 1" },
    { id: 2, color: "#60a5fa", title: "Card 2" },
    { id: 3, color: "#34d399", title: "Card 3" },
    { id: 4, color: "#fbbf24", title: "Card 4" },
];
</script>

<template>
    <div class="container">
        <div v-for="(card, index) in cards" :key="card.id" class="card" :style="{
            backgroundColor: card.color,
            zIndex: index + 1,
        }">
            <h2>{{ card.title }}</h2>
            <p>这是第 {{ card.id }} 个卡片的内容。</p>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: block;
    grid-column: 1 / 13;
    height: 100%;
    overflow: auto;
}

.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: sticky;
    top: 0;
    padding: 0;
    margin: 0 auto;
    width: 80%;
    height: 100%;
    border-radius: 16px;
    box-sizing: border-box;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
    color: white;
}

.card h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}
</style>
