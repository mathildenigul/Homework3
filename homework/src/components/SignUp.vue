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
    
        <p> Email: {{ email }} </p>
        <p> Password: {{ password }} </p>
        <p> Terms : {{ terms }} </p>
        
    </div>
    
    </template>
    
    
    <script>
    export default{
    
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
                //Validate password length
                this.passwordError = this.password.length < 15 &&  this.password.length > 8 ? 
                '' : 'Password should be more than 8 characters and less than 15 characters long!';
                if(this.passwordError == '') this.passwordError = /[A-Z]/.test(this.password) ?
                '' : 'Password should include at least 1 uppercase character!'; // not actually neede because if it starts with 1 it contians at least 1 :)
                if(this.passwordError == '') this.passwordError = /.*[a-z].*[a-z].*/.test(this.password) ?
                '' : 'Password should include at least 2 lowercase characters!';     
                if(this.passwordError == '') this.passwordError = /[0-9]/.test(this.password) ?
                '' : 'Password should include at least 1 numberic value!';          
                if(this.passwordError == '') this.passwordError = /[A-Z]/.test(this.password.charAt(0)) ?
                '' : 'Password should start with an uppercase character!'; 
                if(this.passwordError == '') this.passwordError = /_/.test(this.password) ?
                '' : 'Password should include the character _!'; 

                if(!this.passwordError) {
                    console.log(this.email);
                    console.log(this.password);
                    console.log(this.terms);
    
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
        display:inline-block;
        margin: 25px 0 15px;
        text-transform: uppercase;
    }
    
    input, select {
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: bordre-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: rgb(100, 69, 96);
    }
    
    input[type="checkbox"] {
        display: inline-block;
        width:16px;
        margin: 0 10px 0;
        position: relative;
        top: 2px;
    }
    
    .pill {
        display: inline-block;
        margin: 20px 10px 0 0 ;
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 12px;
        cursor: pointer;
        background: rgb(239, 200, 226);
    }
    
    button {
        background: rgb(88, 18, 66);
        border: 0;
        padding: 10px 20px;
        color: rgb(243, 184, 234);
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
    
    