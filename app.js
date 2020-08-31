const http = require("http");
const routes = require("./routes");
const portNumber = 3000;
const serverAddress = "http://localhost:";

const server = http.createServer(routes.handler);
server.listen(portNumber);
console.log("Server is running at: " + serverAddress + portNumber);