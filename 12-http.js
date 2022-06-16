const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("Welcome to our Home page");
  else if (req.url === "/about") res.end("Welcome to our About page");
  else
    res.end(`
    <h1>Oops..!!!</h1>
    <p>no page wih this url</p>
    <a href="/">Back to Home</a>
  `);
});

server.listen(5000);
