var pattern, output, index, count, maxCount;

function processPattern() {
  pattern = document.getElementById("pattern").value.split("\n");
  output = document.getElementById("output");
  output.innerHTML = "";
  index = 0;
  startRow();
}

function startRow() {
  if (index >= pattern.length) return;

  var row = document.createElement("div");
  var counter = document.createElement("button");
  count = 0;

  var match = pattern[index].match(/\((\d+)\)/);
  maxCount = match ? parseInt(match[1]) : 1;

  counter.innerHTML = "Next";
  counter.onclick = function () {
    count++;
    counter.innerHTML = "Next (" + count + ")";
    if (count == maxCount) {
      index++;
      startRow();
    }
  };
  row.innerHTML = index + 1 + ": " + pattern[index] + " ";
  row.appendChild(counter);
  output.appendChild(row);
}