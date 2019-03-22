const http = require('http');
const fs = require('fs').promises;

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        fs.readdir(__dirname + '/filer').then(filer => {
            let list = `<h2>Index</h2><h4><a href="dias">Dias</a></h4><ul>`;
            for (let file of filer) {
                list += `<li><a href="${file}">${file}</a></li>`;
            }
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(list + "</ul>");
            response.end();
        });
    } else if (request.url === '/dias') {
        fs.readdir(__dirname + '/filer').then(filer => {
            let dias = "";
            for (let file of filer) {
                if (/.+\.jpg/.test(file)) {
                    dias += `<img src="${file}"><br>`;
                }
            }    
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(dias);
            response.end();
        });
    } else {
        let sti = __dirname + '/filer' + request.url;
        fs.readFile(sti).then(file => {
            response.writeHead(200);
            response.write(file);
            response.end();
        }).catch(err => console.log("Unknown file requested: " + sti));
   }
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);