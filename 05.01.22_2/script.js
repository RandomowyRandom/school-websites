const waga = document.getElementById("weight");
const wzrost = document.getElementById("height");
const check = document.getElementById("check");
const wynik = document.getElementById("wynik");

check.onclick = () => {
  const bmi = calculateBMI(wzrost.value, waga.value);
  wynik.innerHTML = `Wynik: ${bmi}`;
};

function calculateBMI(height, weight) {
  if (height <= 0 || weight <= 0) {
    return "Podano nieprawidłowe dane";
  }

  const heightM = height / 100;
  const bmi = weight / (heightM * heightM);

  if (bmi < 18.5) {
    return "Niedowaga";
  } else if (bmi < 25) {
    return "Waga prawidłowa";
  } else if (bmi < 30) {
    return "Nadwaga";
  } else {
    return "Otyłość";
  }
}
