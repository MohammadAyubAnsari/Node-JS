const http = require("http");

const routes = require("./routes");

// const server = http.createServer(routes);//1.

console.log(routes.someText);

const server = http.createServer(routes.handler); //2.

server.listen(4000);
