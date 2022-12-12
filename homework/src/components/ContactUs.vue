<template>
    <form @submit.prevent="submit" @reset="onReset">
      <div>
        <label>name</label>
        <input v-model="name" />
      </div>
      <div>
        <label>email</label>
        <input v-model="email" />
      </div>
      <div>
        <label>message</label>
        <textarea v-model="message"></textarea>
      </div>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  </template>


  <script>
  export default {
    name: "App",
    data() {
      return {
        name: "",
        email: "",
        message: "",
      };
    },
    computed: {
      formValid() {
        const { name, email, message } = this;
        return (
          name.length > 0 &&
          /(.+)@(.+){2,}\.(.+){2,}/.test(email) &&
          message.length > 0
        );
      },
    },
    methods: {
      onReset() {
        this.name = "";
        this.email = "";
        this.message = "";
      },
      submit() {
        if (!this.formValid) {
          return;
        }
        if (!localStorage.getItem("messages")) {
          localStorage.setItem("messages", JSON.stringify([]));
        }
        const messages = JSON.parse(localStorage.getItem("messages"));
        const { name, email, message } = this;
        messages.push({
          name,
          email,
          message,
        });
        localStorage.setItem("messages", JSON.stringify(messages));
      },
    },
  };
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

 textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
}

 button {
     background: linear-gradient(to left, #553c9a, #b393d3);
     border: 0;
     padding: 10px 20px;
     color: white;
     border-radius: 20px;
     margin-right: 5px;
 }

 
</style>
    