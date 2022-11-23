<template>
    <button v-on:click="ResetLikes">Reset</button>
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
    background-color: red;
    border-color: red;
    border-radius: 3px;
}
</style>