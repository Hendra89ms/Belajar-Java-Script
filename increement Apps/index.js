let count = 0;

document.getElementById("minusButton").onclick = function () {
  document.getElementById("count-el").innerHTML = count;
  count--;
  if (count <= 0) {
    alert("tidak boleh kurang dari 0");
    count = 0;
  }
};

document.getElementById("plusButton").onclick = function () {
  document.getElementById("count-el").innerHTML = count;
  count++;
  if (count > 10) {
    alert("tidak boleh lebih dari 10");
  }
};
