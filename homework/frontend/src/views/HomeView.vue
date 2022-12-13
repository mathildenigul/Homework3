<template>
  <Header />
  <div id="pad"></div>
  <LogoutButton />
  <Footer />
  <Posts />
  <AddPostButton />
  <DeleteAllButton />
  <div id="pad"></div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Posts from '../components/Post.vue'
import AddPostButton from '../components/AddPostButton.vue'
import DeleteAllButton from '../components/DeleteAllButton.vue'
import LogoutButton from '../components/LogoutButton.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    Posts,
    AddPostButton,
    DeleteAllButton,
    LogoutButton
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
