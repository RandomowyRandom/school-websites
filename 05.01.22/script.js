const wzrost = document.getElementById("wzrost");
const check = document.getElementById("check");
const result = document.getElementById("result");

check.onclick = () => {
  let num = parseInt(wzrost.value);

  if (num < 150) {
    result.innerHTML = "Niski";
  } else if (num > 180) {
    result.innerHTML = "Wysoki";
  } else {
    result.innerHTML = "Średni";
  }
};
