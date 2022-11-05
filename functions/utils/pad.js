function pad(num) {
  num = num.toString();
  while (num.length < 4) num = "0" + num;
  return num;
}

module.exports = pad;
