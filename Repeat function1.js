function repeatStringNumTimes(str, num) {
  var accumulatedStr = "";

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}

console.log(repeatStringNumTimes("beans", 4));

console.log(repeatStringNumTimes(" I like" + " beans!", 10));
