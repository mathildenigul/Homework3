<template>
    <button v-on:click="Logout">Logout</button>
</template>

<script>
export default {
    methods: {
        Logout() {
            console.log(1);
            fetch("http://localhost:3000/auth/logout", {
                credentials: 'include'
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
    margin-top: 30px;
}
</style>