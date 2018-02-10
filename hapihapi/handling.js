const Hapi = require('hapi');
const Inert = require('inert');
const Path = require('path');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080),
});

server.register(Inert, (err) => {
  if (err) {
    console.log('inert wtf');
  }
});

server.route({
  method: 'GET',
  path: '/',
  handler: {
    file: Path.join(__dirname, 'index.html'),
    // file: '/Users/aditiverma/paircode/hapihapi/index.html',
  },
});

server.start((err) => {
  if (err) {
    console.log('wtf');
  }
});
module.exports = server;
