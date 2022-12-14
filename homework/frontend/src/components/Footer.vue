<template>
  <div id="footer">
    <div class="link">
      <router-link style="text-decoration: none; color: inherit; " to="/contactus">Contact Us</router-link>
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
  align-items: center;
  display: flex;
  flex-direction: column;
}

.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  right: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

#footer div {
  margin: 10px;

}

.link {
  color: white;
  padding: 5px;
  font-weight: bold;

}

.link:hover {
  background-color: #553c9a;
  color: #f8f7f8;
}
</style>