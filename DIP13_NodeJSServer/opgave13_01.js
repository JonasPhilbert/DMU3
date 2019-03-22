const http = require('http');
const fetch = require('node-fetch');

const server = http.createServer((request, response) => {
    if (request.method == "GET") {
        response.writeHead(200, {"Content-Type": "text/html"});
        fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(result => {
            let table = `<table><tr><th>ID</th><th>Name</th><th>Company</th></tr>`;
            for (let user of result) {
                table += `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.company.name}</td></tr>`;
            }
            table += "</table>";
            response.end(table);
        });
    } else {
        response.writeHead(405, {"Content-Type": "text/plain"});
        response.end("405: Server only accepts GET requests.");
    }
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);