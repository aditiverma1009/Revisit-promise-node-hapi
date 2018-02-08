function printMssg(inputArg) {
  console.log(inputArg);
}

function warmingUp(arg1) {
  const inputArgSent = arg1;
  setTimeout(printMssg, 300, inputArgSent);
  return true;
}

warmingUp('TIMED OUT!');
module.exports = warmingUp;
