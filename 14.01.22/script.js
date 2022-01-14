// stworzenie elementu img
let player = document.createElement("img")

// ustawienie zdjęcia img i dodanie mu klasy "player"
player.setAttribute("src", "johnxina.jpg") 
player.classList.add("player")

// dodanie elementu do body
document.body.appendChild(player)

// tablica z pozyvją gracza
let position = [0, 0]

// nasłuchwanie cdo kliknięcia na strzałkę
document.addEventListener("keydown", e =>{
    switch(e.key){
        case "ArrowUp":
            // zmienienie pozycji gracza do góry
            position[1]--
            break
        case "ArrowDown":
            // zmienienie pozycji gracza do dołu
            position[1]++
            break
        case "ArrowLeft":
            // zmienienie pozycji gracza do lewej
            position[0]--
            break
        case "ArrowRight":
            // zmienienie pozycji gracza do prawej
            position[0]++
            break
        }

        // ustawienie pozycji gracza
    player.style.top = position[1] * 20 + "px"
    player.style.left = position[0] * 20 + "px"

    }
)