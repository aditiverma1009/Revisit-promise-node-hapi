const Hapi = require('hapi');
// const Path = require('path');
const Vision = require('vision');
const Handlebars = require('handlebars');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8001),
});

server.register(Vision, (err) => {
  if (err) console.log('vision issue');
});

server.route({

  method: 'GET',
  path: '/',
  handler: {
    view: 'index.html',
  },
});


server.views({
  engines: {
    html: Handlebars,
  },
  path: '/Users/aditiverma/paircode/hapihapi/templates/',
});

server.start(() => console.log(server.info.uri));

module.exports = server;
