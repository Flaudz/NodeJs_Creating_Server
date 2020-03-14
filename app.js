const http = require("http");

let server = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end("Hey ninjas");
});

server.listen(5050, "127.0.0.1");
