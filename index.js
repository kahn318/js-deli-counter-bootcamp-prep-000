var katzDeliLine = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length <= 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var array = [];
    for (var i = 0, n = katzDeliLine.length; i < n; i++) {
      array.push(`${i + 1}. ${katzDeliLine[i]}`);
    }
    return "The line is currently: " + array.join(", ");
  }
}
