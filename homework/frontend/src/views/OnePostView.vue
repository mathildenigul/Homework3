<template>
    <div id="onepost">
    <Header />
    <div id="pad"></div>
    <OnePost msg="Single Post view" />
    <Footer />
    </div>
</template>

<script>
import OnePost from '../components/OnePost.vue'
import ContactUsForm from '../components/ContactUs.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'OnePostView',
    components: {
    ContactUsForm,
    OnePost,
    Header,
    Footer
    }
}
</script>

<style scoped>
#pad {
  padding: 30px;
}
#contactus {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  body {
    margin: 0;
    background: #eee;
  }
  </style>