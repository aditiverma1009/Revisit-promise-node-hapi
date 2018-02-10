const Hapi = require('hapi');

const server = new Hapi.Server();

function handlerFn(request, response) {
  response('Hello hapi');
}

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080),
});

server.route({
  path: '/',
  method: 'GET',
  handler: handlerFn,
});

server.start(() => {
  console.log('server is running perfectly at', server.info.uri);
});

module.exports = server;
