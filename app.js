const http = require('http');
const rourtes = require('./routes');
const routes = require('./routes');
const portNumber = 3000;

const server = http.createServer(routes.handler);

server.listen(portNumber);