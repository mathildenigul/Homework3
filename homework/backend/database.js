const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "sudo",
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
CREATE TABLE IF NOT EXISTS posts (
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
INSERT INTO posts (date, body) VALUES 
  ('Wed Dec 7 2022', 'Does anyone know where the lab is today?'),
  ('Thu Dec 8 2022', 'I am having an awful lot of trouble with this homework...'),
  ('Sun Dec 11 2022', 'Dont worry, it will be Christmas soon.');
`;

// A function to execute the previous queries
execute(createPostsTblQuery).then((result) => {
  console.log(result);
  execute(createPostsContentQuery);
});
execute(createUsersTblQuery);

module.exports = pool;
