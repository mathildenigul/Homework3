<template>
    <button v-on:click="DeleteAll">Delete all</button>
</template>

<script>
export default {
    methods: {
        DeleteAll() {
            fetch("http://localhost:3000/api/posts", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => response.json())
            .then((rj => {
                console.log(rj);
                this.$router.go();
            }));
        }
    }
}
</script>

<style>
button {
    cursor: pointer;
    font-weight: bold;
    color: white;
    background-image: linear-gradient(to left, #553c9a, #b393d3);
    border-color: #855fc1;
    border-radius: 6px;
    border-width: 1.5px;
    padding: 5px;
}
</style>