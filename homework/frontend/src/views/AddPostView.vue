<template>
  <div id="addpost">
    <Header />
    <AddPost msg="Add a new post" />
    <Footer />
  </div>
</template>

<script>
import AddPost from '../components/AddPost.vue'
import ContactUsForm from '../components/ContactUs.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'AddPostView',
  components: {
    ContactUsForm,
    AddPost,
    Header,
    Footer
  }
}
</script>

<style scoped>
body {
  margin: 0;
  background: #eee;
}
</style>