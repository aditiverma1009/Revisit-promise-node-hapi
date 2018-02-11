const net = require('net');

const zeroFill = arg1 => ((arg1 < 10) ? (`0${arg1}`) : (arg1));
const now = () => {
  const d = new Date();
  const dateToday = `${d.getFullYear()}-${zeroFill(d.getMonth() + 1)}-${zeroFill(d.getDate())} ${zeroFill(d.getHours())}:${
    zeroFill(d.getMinutes())}`;
  return dateToday;
};
const server = net.createServer((socket) => {
  socket.end(`${now()}\n`);
});
server.listen(Number(process.argv[2]));

