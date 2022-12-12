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
      "INSERT INTO post (date, body) values ($1, $2)    RETURNING*",
      [post.date, post.body]
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

app.get("/api/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const posts = await pool.query("SELECT * FROM post WHERE id = $1", [id]);
    res.json(posts.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// put
app.put("/api/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = req.body;
    const updatepost = await pool.query(
      "UPDATE post SET (date, body) = ($2, $3) WHERE id = $1",
      [id, post.date, post.body]
    );
    res.json(updatepost);
  } catch (err) {
    console.error(err.message);
  }
});

// delete
app.delete("/api/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletepost = await pool.query("DELETE FROM post WHERE id = $1", [id]);
    res.json(deletepost);
  } catch (err) {
    console.error(err.message);
  }
});
