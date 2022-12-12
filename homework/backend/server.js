const express = require("express");
const pool = require("./database");
const cors = require("cors");
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

// The express.json() function is a built-in middleware function in Express.
// It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());

app.listen(port, () => {
  console.log("Server is listening to port " + port);
});

// post
app.post("/api/posts/", async (req, res) => {
  try {
    const post = req.body;
    const newpost = await pool.query(
      "INSERT INTO post (body) values ($1)    RETURNING*",
      [post.body]
    );
    res.json(newpost);
  } catch (err) {
    console.error(err.message);
  }
});

// get
app.get("/api/posts", async (req, res) => {
  try {
    const posts = await pool.query("SELECT * FROM post");
    res.json(posts.rows);
  } catch (err) {
    console.error(err.message);
  }
});
