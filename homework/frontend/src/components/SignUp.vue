<template>

    <div>
        <form @submit.prevent="handleSubmit">
            <label>Email :</label>
            <input type="email" v-model="email" required>

            <label>Password :</label>
            <input type="password" v-model="password" required>
            <div v-if="passwordError" class="error">{{ passwordError }} </div>



            <div>
                <input type="checkbox" v-model="terms" required>
                <label>Please accept terms and conditions</label>
            </div>
            <div class="button">
                <button class="submit" type="submit">Sign up</button>
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
                fetch("http://localhost:3000/auth/signup", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify({email: this.email, password: this.password}),
            })
            .then((response) => {
                if(!response.ok) alert("Error while trying to signup. Email probably already in use.");
                else this.$router.push("/");
            })
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
     padding: 20px;
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
     padding: 10px 20px;
     color: white;
     border-radius: 20px;
 }

 .submit {
     text-align: center;
 }

 .error {
     color: #ff0000;
     margin-top: 10px;
     font-size: 0.8em;
     font-weight: bold;
 }
</style>
    
    