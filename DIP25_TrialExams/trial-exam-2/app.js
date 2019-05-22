const express = require('express');
const app = express();

app.use(express.static('filer'));

app.listen(8080);

console.log('Lytter på port 8080 ...');
