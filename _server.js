const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = 7000;

app.use(express.static(__dirname + '/front-end'));
app.set('port', port);

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname))
});

const server = http.createServer(app);

server.listen(port, ()=> {
  console.log('Working on ' + port)
});
