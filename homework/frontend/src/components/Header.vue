<template>
    <div id="header">
        <div class="link">
            <router-link style="text-decoration: none; color: inherit;" to="/">Home</router-link>
        </div>
        <!-- <div class="link">
            <router-link style="text-decoration: none; color: inherit;" to="/signup">Signup</router-link>
        </div>
        <div class="link">
            <router-link style="text-decoration: none; color: inherit;" to="/login">Log In</router-link>
        </div> -->
    
        <div class="user-icon">
            <img src="../assets/profile_pictures/Mari_Mutt.png" />
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
#header {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(41, 37, 37, 0.914);
    width: 100%;
    height: 10%;
    flex-direction: column;
    align-items: center;
    display: flex;
    flex-direction: row;
    background-image: linear-gradient(to left, #553c9a, #b393d3);
}

#header div {
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

.user-icon {
    width: 40px;
    height: 40px;
    position: fixed;
    right: 20px;
}

.user-icon img {
    width: 100%;
    height: auto;
    border-radius: 50%;
}

</style>