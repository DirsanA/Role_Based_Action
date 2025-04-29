const http = require("http");
const app = require("./app"); // Import the Express app

// Create the server
const server = http.createServer(app);

// Start the server on port 3000
server.listen(3000, function () {
  console.log("Server is running on port 3000");
});
