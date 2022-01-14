// stworzenie elementu img
let johnXina = document.createElement("img");

// ustawienie zdjęcia img i dodanie mu klasy "player"
johnXina.setAttribute("src", "johnxina.jpg");
johnXina.classList.add("player");

// dodanie elementu do body
document.body.appendChild(johnXina);

// tablica z pozycją elementu
let pozycja = [0, 0];

// wartość o którą element będzie się przemieszczał
let wartoscInkrementacji = 20;

// nasłuchwanie kliknięcia strzałek
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      // zmienienie pozycji gracza do góry
      // y + 1
      pozycja[1]--;
      break;
    case "ArrowDown":
      // zmienienie pozycji gracza w dół
      // y - 1
      pozycja[1]++;
      break;
    case "ArrowLeft":
      // zmienienie pozycji gracza w lewo
      // x - 1
      pozycja[0]--;
      break;
    case "ArrowRight":
      // zmienienie pozycji gracza w prawo
      // x + 1
      pozycja[0]++;
      break;
  }

  // ustawienie pozycji gracza
  johnXina.style.top = pozycja[1] * wartoscInkrementacji + "px";
  johnXina.style.left = pozycja[0] * wartoscInkrementacji + "px";
});
