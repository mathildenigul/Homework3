<template>
  <div class="container">
    <div class="post-container">

      <div>
        <p>{{ post.date }}</p>
      </div>
      <div class="post-text">
        <textarea required v-model="post.body"></textarea>
      </div>
      <div>
        <button @click="updatePost">Update</button>
        <button>Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnePost",
  data() {
    return {
      post: {
        id: 0,
        date: "",
        body: "",
      },
    };
  },
  methods: {
    fetchPost(id) {
      fetch(`http://localhost:3000/api/posts/${id}`)
        .then((response) => response.json())
        .then((data) => {
          this.post.id = data.id;
          this.post.date = data.date;
          this.post.body = data.body;
        })
        .catch((err) => console.log(err.message));
    },
    updatePost() {
        let date = new Date().toDateString();
        fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
      })
        .then((response) => {
          console.log(response.data);
          //this.$router.push("/apost/" + this.post.id);
          // We are using the router instance of this element to navigate to a different URL location
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
        });
      /* console.log(1);
      let date = new Date().toDateString();
      fetch(`http://localhost:3000/api/posts/${id}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({date: date, body: body}),
        })
        .then((response) => {
            console.log(response);
        }); */
    } 
  },
  mounted() {
    // call fetchPost() when this element (OnePost) mounts
    this.fetchPost(this.$route.params.id);
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