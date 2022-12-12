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
            let reqs = ['Password should be at least 8 characters and less than 15 characters long!',
                'Password should include at least 1 uppercase character!',
                'Password should include at least 2 lowercase characters!',
                'Password should include at least 1 numberic value!',
                'Password should start with an uppercase character!',
                'Password should include the character _!']
            let failed = [false, false, false, false, false, false]

            failed[0] = this.password.length < 15 && this.password.length >= 8 ?
                false : true;
            failed[1] = /[A-Z]/.test(this.password) ?
                false : true; // not actually neede because if it starts with 1 it contians at least 1 :)
            failed[2] = /.*[a-z].*[a-z].*/.test(this.password) ?
                false : true;
            failed[3] = /[0-9]/.test(this.password) ?
                false : true;
            failed[4] = /[A-Z]/.test(this.password.charAt(0)) ?
                false : true;
            failed[5] = /_/.test(this.password) ?
                false : true;

            this.passwordError = "";
            for (let i = 0; i < reqs.length; i++) {
                if (failed[i]) {
                    this.passwordError += reqs[i] + " ";
                }
            }


            if (!this.passwordError) {
                alert("You have successfully logged in!");
                console.log(this.email);
                console.log(this.password);


            }
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