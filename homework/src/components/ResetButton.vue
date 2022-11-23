<template>
    <button v-on:click="ResetLikes">Reset Likes</button>
</template>

<script>
import Posts from "@/components/Post.vue";
export default {
    name: "Post",
    data: function() {
        return {}
    },
computed: {
    Posts(){
        return this.$store.state.Posts
    }
},

methods: {
    ResetLikes() {
        this.$store.commit('ResetLikes')
    }
}
}
</script>

<style>
button {
    cursor: pointer;
    font-weight: bold;
    color: white;
    background-color: #aa98c6;
    border-color: #855fc1;
    border-radius: 6px;
    border-width: 1.5px;
    padding: 5px;
}
</style>