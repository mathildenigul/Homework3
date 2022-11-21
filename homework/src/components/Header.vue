<template>
    <div id="header">
        <router-link to="/">Home</router-link> |
        <router-link to="/signup">Signup</router-link>
    </div>
</template>

<script>

</script>

<style scoped>
#header{
 position:fixed;
 top:0;
 background-color: rgba(41, 37, 37, 0.914);
 width: 100%;
 height: 4%;
}

#header a{
    color: #cfbbe0;
}
</style>