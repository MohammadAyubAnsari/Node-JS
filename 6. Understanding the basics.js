const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.write("<html>");
  res.write("<body><h1>Ayub</h1></body>");
  res.write("</html");
  res.end();
});

server.listen(4000, () => {
  console.log("server is running on http://localhost:4000");
  console.log("Ayub");
});
