const http = require('http');
const fetch = require('node-fetch');

let usersUrl = 'https://jsonplaceholder.typicode.com/users';

http.createServer((request, response) => {
    if (request.method === 'GET') {
        fetch(usersUrl)
            .then(resultat => {
                // ...
            })
    } else {
        response.writeHead(405);
        response.write('Kun GET er tilladt!');
        response.end();
    }
}).listen(8080);

console.log('Lytter på port 8080 ...');

