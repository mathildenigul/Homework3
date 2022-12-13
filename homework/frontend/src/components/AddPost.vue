<template>
    <form @submit.prevent="AddPost()">
        <div>
            <label>Add post</label>
            <textarea v-model="message"></textarea>
        </div>
        <button type="submit">Add</button>
    </form>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            message: "",
        };
    },
    methods: {
        AddPost() {
            let date = new Date().toDateString();
            fetch("http://localhost:3000/api/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"date": date, "body": this.message}),
            })
            .then((response) => response.json())
            .then((rj => {
                console.log(rj);
                this.$router.push("/")
            }))
        }
    }
}
</script>

<style>
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