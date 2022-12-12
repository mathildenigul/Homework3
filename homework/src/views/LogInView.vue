<template>
    <div id="login">
      <Header />
      <LogInForm msg="Log In Form" />
      <Footer />
    </div>
  </template>
  
  <script>
  import LogInForm from '../components/LogIn.vue';
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
 
  
  export default {
    name: 'LogInView',
    components: {
    Header,
    Footer,
    LogInForm
}
  }
  </script>
  
  <style scoped>
  #signup {
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
  