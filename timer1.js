const makeAlarms = () => {
  let args = process.argv
  let alarms = args.slice(2);
  if (alarms.length === 0) {
    return;
  }
  for (let alarm of alarms) {
    if (isNaN(Number(alarm)) || Number(alarm) < 0) {
      continue;
    }
    setTimeout(() => process.stdout.write('\x07'), (Number(alarm) * 1000));
  }
};

makeAlarms();