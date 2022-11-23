<template>
    <div class="container">
        <div class="post-container" v-for = "post in Posts" :key="post.id">
            <div class="user-profile">
                <img :src="require(`@/assets/profile_pictures/${post.profile_pic}.png`)" alt="katki" />
                    <div>
                        <p> {{post.username}}</p>
                        <span> {{post.date_time}}</span>
                    </div>
            </div>
            <div class="post-text">
                    <p> {{post.text}}</p>
            </div>
            <img v-if="post.pic==true" class="post-img"  :src="require(`@/assets/post_pictures/${post.pic_src}.png`)" alt="">    
            <div class="post-row">
                <div class="activity-icons">
                    <div> 
                        <img src="../assets/images/like.png" v-on:click="$store.commit('IncreaseLikes', post.id)">
                        {{post.likes}}
                    </div>
                    <div>
                        <img src="../assets/images/comment.png" alt="">
                        {{post.comments}}
                    </div>
                    <div>
                        <img src="../assets/images/share.png" alt="">
                        {{post.shares}}
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
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
    IncreaseLikes() {
        this.$store.commit('IncreaseLikes')
    }
}
}
</script>

<style>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media(min-width: 700px) {
        min-height: 650px;
        min-width: 650px;
    }
}

.post-container {
    left: auto;
    right: auto;
    width: 500px;
    background: rgb(241, 236, 236);
    border-radius: 6px;
    padding: 20px;
    border-color: #626262;
    margin: 20px 0;
}

.user-profile {
    display: flex;
    align-items: center;
}

.user-profile img {
    width: 45px;
    border-radius: 50%;
    margin-right: 10px;
}

.user-profile p {
    text-align: left;
    margin-bottom: -5px;
    font-weight: 500;
    color: #626262;
}

.user-profile small {
    font-size: 12px;
}

.user-profile span {
    font-size: 13px;
    color: #9a9a9a;
}

.post-img {
    width: 100%;
    border-radius: 4px;
    margin-bottom: 5px;
}

.post-text {
    text-align: left;
    margin: 15px 0;
    font-size: 15px;
}

.post-text span {
    color: #626262;
    font-weight: 500;
}

.post-text a {
    color: #855fc1;
    text-decoration: none;
}

.post-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.activity-icons div img {
    cursor: pointer;
    width: 18px;
    margin-right: 10px;
}

.activity-icons div {
    display: inline-flex;
    align-items: center;
    margin-right: 30px;
}
</style>