function calculate() {
  let tempF = parseFloat(document.getElementById("temp").value);
  let radius = parseFloat(document.getElementById("radius").value);
  let celsius = (tempF - 32) * 5 / 9;
  let area = Math.PI * Math.pow(radius, 2);
  document.getElementById("tempC").textContent = celsius.toFixed(2);
  document.getElementById("area").textContent = area.toFixed(2);
}
