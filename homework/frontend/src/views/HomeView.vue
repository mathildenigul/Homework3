<template>
  <Header />
  <div id="pad"></div>
  <Footer />
  <Posts />
  <ResetButton />
  <div id="pad"></div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Posts from '../components/Post.vue'
import ResetButton from '../components/ResetButton.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    Posts,
    ResetButton
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
