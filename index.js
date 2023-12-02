const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hellow World");
  } else if (req.url === "/revou") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hellow Worldasda");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Salah URl");
  }
});

const PORT = process.env.PORT || 3000;
const IP = "127.0.0.0";
server.listen(PORT, IP, () => {
  console.log("Server sudah jalan");
});
