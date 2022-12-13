<template>
    <button v-on:click="AddPost">Add post</button>
</template>

<script>
export default {
    methods: {
        AddPost() {
            this.$router.push("/addpost")
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