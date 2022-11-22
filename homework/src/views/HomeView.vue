<template>
  <Header />
  <Footer />
  <Posts></Posts>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Posts from '../components/Post.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    Posts
  },
  data() {
    return {
    }
  } 
}
</script>
