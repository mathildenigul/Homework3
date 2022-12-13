<template>
  <Header />
  <div id="pad"></div>
  <Footer />
  <Posts />
  <AddPostButton />
  <div id="pad"></div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Posts from '../components/Post.vue'
import AddPostButton from '../components/AddPostButton.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    Posts,
    AddPostButton
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
#pad {
  padding: 30px;
}
</style>
