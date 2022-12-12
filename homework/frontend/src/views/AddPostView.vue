<template>
    <div id="addpost">
    <Header />
    <AddPost msg="Contact Us Form" />
    <Footer />
    </div>
</template>

<script>
import ContactUsForm from '../components/ContactUs.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'ContactUsView',
    components: {
    ContactUsForm,
    Header,
    Footer
    }
}
</script>

<style scoped>
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