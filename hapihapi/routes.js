const Hapi = require('hapi');

const server = new Hapi.Server();

function handlerFn(request, response) {
  response(`Hello ${encodeURIComponent(request.params.name)}`);
}

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8082),
});

server.route({
  path: '/{name}',
  method: 'GET',
  handler: handlerFn,
});

server.start((err) => {
  if (err) {
    throw err;
  }
});

module.exports = server;
