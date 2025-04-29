// Import the mysql2/promise module to use promise-based API
const mysql = require("mysql2/promise");

// Create a connection pool for better performance
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1227",
  database: "test",
  waitForConnections: true, // Wait for connections instead of rejecting
  connectionLimit: 10, // Limit the number of connections in the pool
  queueLimit: 0, // Set a limit for the query queue (0 means unlimited)
});

// Test the connection (use async/await)
async function testConnection() {
  try {
    const [rows, fields] = await pool.query("SELECT 1 + 1 AS solution");
    console.log("Database Connected!!!", rows);
  } catch (err) {
    console.error("Database Not connected!!!", err);
  }
}

// Test connection when the server starts
testConnection();

// Export the pool so that other files can use the connection
module.exports = pool;
