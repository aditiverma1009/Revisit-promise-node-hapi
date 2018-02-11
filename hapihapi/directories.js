const Hapi = require('hapi');
const Inert = require('inert');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8001,
});

server.register(Inert);

server.route({

  method: 'GET',
  path: '/foo/bar/baz/{fileName}',
  handler: {
    directory: {
      path: './public',
    },
  },
});

server.start(() => console.log(server.info.uri));

module.exports = server;
