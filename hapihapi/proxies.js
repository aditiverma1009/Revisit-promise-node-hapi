const Hapi = require('hapi');
const H2o2 = require('h2o2');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8001),
});

server.register(H2o2, () => {
  console.log('h202 issue');
});

server.route({

  method: 'GET',
  path: '/proxy',
  handler: {
    proxy: {
      host: '127.0.0.1',
      port: 65535,
    },
  },
});


server.start(() => console.log(server.info.uri));

module.exports = server;
