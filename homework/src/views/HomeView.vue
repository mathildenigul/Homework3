<template>
  <Header />
  <Footer />
  <Post :post="post" v-for="(post, index) in Posts" :key="index" />
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Post from '../components/Post.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    Post
  },
  data() {
    return {
      Posts: [
        {id: 1,
        username: "Mari Mutt",
        profile_pic: "Mari_Mutt",
        date_time: "September 29 2021, 13.20",
        text: "Ütle mulle üks ilus poisslapse nimi. #BrunoBennoBernhard",
        text_only: 0,
        likes: 300,
      },
      {id: 2,
        username: "Saara Sisask",
        profile_pic: "Saara_Sisask",
        date_time: "September 29 2021, 00.40",
        text: "Kaugelt nurga mehed peavadki varem tulema. #Imeliknimi",
        text_only: 0,
        likes: 30,
      }
      
      ]
    }
  } 
}
</script>
