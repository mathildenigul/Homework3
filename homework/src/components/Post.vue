<template>
    <div class="wrapper">
        <div class="post-container">
            <div class="user-profile">
                <img :src="require(`@/assets/profile_pictures/${post.profile_pic}.png`)" alt="katki" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Post",
    props: ['post'],
}
</script>

<style>
.wrapper {
    display: flex;
    justify-content: space-between;
    padding: 13px 5%;
}

.post-container {
    width: 100%;
    background: #fff;
    border-radius: 6px;
    padding: 20px;
    color: #626262;
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
    margin-bottom: -5px;
    font-weight: 500;
    color: #626262;
}

.post-text {
    color: #9a9a9a;
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

.post-img {
    width: 100%;
    border-radius: 4px;
    margin-bottom: 5px;
}

.post-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>