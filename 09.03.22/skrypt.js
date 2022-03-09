const przycisk = document.getElementById("przycisk");
const dane = document.getElementById("dane");
const wynik = document.getElementById("wynik");

przycisk.onclick = () => {
  let wprowadzonePuszki = dane.value;
  let potrzebnePuszki = wprowadzonePuszki / 4;
  potrzebnePuszki = Math.ceil(potrzebnePuszki);

  wynik.innerHTML = `Liczba jednolitrowych puszek
farby potrzebnych do pomalowania wynosi ${potrzebnePuszki}`;
};
