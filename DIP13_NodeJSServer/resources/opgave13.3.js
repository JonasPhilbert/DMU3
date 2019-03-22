const http = require('http');
const fs = require('fs').promises;

http.createServer((request, response) => {
    if (request.url === '/') {
        fs.readdir('filer')
            .then(filer => {
                // ...
            })
    } else {
        let sti = 'filer' + request.url;
        // ...
   }
}).listen(8080);

console.log('Lytter på port 8080 ...');

