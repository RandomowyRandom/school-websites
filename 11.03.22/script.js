const pinElement = document.getElementById("pin");
const btnElement = document.getElementById("btn");
const resElement = document.getElementById("result");

btnElement.onclick = () => {
  console.log("aaas");
  if (isNumber(pin.value) && pin.value.length === 4) {
    resElement.innerHTML = "Pin jest poprawny!";
    resElement.style.color = "green";
  } else {
    resElement.innerHTML = "Pin jest niepoprawny!";
    resElement.style.color = "red";
  }
};

const isNumber = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
