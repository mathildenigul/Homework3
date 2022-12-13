const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "postgres",
  database: "homework",
  host: "localhost",
  port: "5432",
});

const execute = async (query) => {
  try {
    await pool.connect(); // gets connection
    await pool.query(query); // sends queries
    return true;
  } catch (error) {
    console.error(error.stack);
    return false;
  }
};

const createPostsTblQuery = `
 DROP TABLE IF EXISTS posts;
 CREATE TABLE posts (
     id SERIAL PRIMARY KEY,    
     date VARCHAR(30) NOT NULL,     
     body VARCHAR(200) NOT NULL
 );`;

const createUsersTblQuery = `
 DROP TABLE IF EXISTS users;
 CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(200) NOT NULL UNIQUE,
  password VARCHAR(200) NOT NULL 
);`;

const createPostsContentQuery = `
 INSERT INTO posts (date, body) values ('12.12.2020', 'you have to use then');
`;

// A function to execute the previous query
execute(createPostsTblQuery).then(execute(createPostsContentQuery));
execute(createUsersTblQuery);

module.exports = pool;
