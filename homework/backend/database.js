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
 CREATE TABLE IF NOT EXISTS "post" (
     "id" SERIAL PRIMARY KEY,         
     "title" VARCHAR(200) NOT NULL,
     "body" VARCHAR(200) NOT NULL,
     "urllink" VARCHAR(200)  
 );`;

// A function to execute the previous query
execute(createPostsTblQuery);

module.exports = pool;
