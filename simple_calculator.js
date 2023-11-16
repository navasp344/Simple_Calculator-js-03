function sum() {
  var n1E1 = document.getElementById("number1");
  var n2E2 = document.getElementById("number2");
  var n1 = parseFloat(n1E1.value);
  var n2 = parseFloat(n2E2.value);
  var sum = n1 + n2;
  document.getElementById("result").value = sum;
}
function substract() {
  var n1E1 = document.getElementById("number1");
  var n2E2 = document.getElementById("number2");
  var n1 = parseFloat(n1E1.value);
  var n2 = parseFloat(n2E2.value);
  var substract= n1 - n2;
  document.getElementById("result").value = substract;
}
function multiplication() {
  var n1E1 = document.getElementById("number1");
  var n2E2 = document.getElementById("number2");
  var n1 = parseFloat(n1E1.value);
  var n2 = parseFloat(n2E2.value);
  var mult = n1 * n2;
  document.getElementById("result").value = mult;
}

function division() {
  var n1E1 = document.getElementById("number1");
  var n2E2 = document.getElementById("number2");
  var n1 = parseFloat(n1E1.value);
  var n2 = parseFloat(n2E2.value);
  var div = n1 / n2;
  document.getElementById("result").value = div;
}
