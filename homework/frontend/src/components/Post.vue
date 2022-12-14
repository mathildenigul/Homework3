<template>
  <div class="container">
    <div class="post-container" v-for="post in posts" :key="post.id">
      <a style="text-decoration: none;" :href="'/onepost/' + post.id">
<!-- <router-link style="text-decoration: none;" to="{name: '/OnePost', params: {postID: {post.id}}}"> -->

        <div>
          <p>{{ post.date }}</p>
        </div>
        <div><p>{{ post.id }}</p></div>
        <div class="post-text">
          <p>{{ post.body }}</p>
        </div>
      </a>
     <!--  </router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "AllPosts",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    fetchPosts() {
      // You should remember how Fetch API works
      // fetch is a GET request unless stated otherwise. Therefore, it will fetch all posts from the database
      fetch(`http://localhost:3000/api/posts/`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },
  },
  mounted() {
    // call fetchPosts() when this element (AllPosts) mounts
    this.fetchPosts();
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 700px) {
    min-height: 650px;
    min-width: 650px;
  }
}

.post-container {
  left: auto;
  right: auto;
  text-align: right;
  font-size: small;
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
