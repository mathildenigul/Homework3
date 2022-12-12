<template>

    <div>
        <form @submit.prevent="handleSubmit">
            <label>Email :</label>
            <input type="email" v-model="email" required>

            <label>Password :</label>
            <input type="password" v-model="password" required>
            <div v-if="passwordError" class="error">{{ passwordError }} </div>

            <div class="button">
                <button class="submit" id="button1" type="submit">Log in</button>
            </div>

            <div class="text"> or  </div>


            <div class="link">
                <router-link style="text-decoration:none; color: inherit;" to="/signup">Signup</router-link>
            </div>


        
        </form>

    </div>

</template>
    
    
<script>
export default {

    data() {
        return {
            email: '',
            password: '',
            terms: false,
            passwordError: ''
        }
    },
    methods: {

        handleSubmit() {
            fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            credentials: 'include', //  Don't forget to specify this if you need cookies
            body: JSON.stringify({email: this.email, password: this.password}),
        })
        .then((response) => response.json())
        .then((data) => {
        console.log(data);
        //this.$router.push("/");
        location.assign("/");
        })
        .catch((e) => {
            console.log(e);
            console.log("error");
        });
        }
    }

}
</script>
    
    
<style scoped>
form {
     max-width: 600px;
     margin: 30px auto;
     background: #fff;
     text-align: left;
     padding: 60px;
     border-radius: 10px;
 }

 label {
     color: rgb(185, 120, 188);
     display: inline-block;
     margin: 25px 0 15px;
     text-transform: uppercase;
 }

 input,
 select {
     display: block;
     padding: 10px 6px;
     width: 100%;
     box-sizing: bordre-box;
     border: none;
     border-bottom: 1px solid #ddd;
     color: rgb(116, 74, 128);
 }

 input[type="checkbox"] {
     display: inline-block;
     width: 16px;
     margin: 0 10px 0;
     position: relative;
     top: 2px;
 }


 button {
    
     background: linear-gradient(to left, #553c9a, #b393d3);
     border: 0;
     margin-top: 10px;
     padding: 10px 20px;
     color: white;
     border-radius: 30px;
     
 }
 .text {
    color: rgb(185, 120, 188);
     display: inline-block;
     margin: 25px 25px 15px;
     text-transform: uppercase;
 }

 .link{
    
    background: linear-gradient(to left, #553c9a, #b393d3);
     border: 0;
     margin-top: 10px;
     padding: 10px 20px;
     color: white;
     border-radius: 30px;
     width: 50px;
 }

 .error {
     color: #ff0000;
     margin-top: 10px;
     font-size: 0.8em;
     font-weight: bold;
 }
</style>