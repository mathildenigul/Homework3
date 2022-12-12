<template>
  <div id="footer">
    <div class="link">
            <router-link style="text-decoration: none; color: inherit;" to="/contactus">Contact Us</router-link>
        </div>
   
  </div>
</template>

<script>

</script>

<style scoped>
#footer {
  position: fixed;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to left, #553c9a, #b393d3);
  color: rgb(210, 207, 207);
  font-weight: bold;
  width: 100%;
  height: 5%;
}

.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  right: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>