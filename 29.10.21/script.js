const forText = document.getElementById("for")
const dowhileText = document.getElementById("dowhile")

const liczby = [2, 1, 3, 7, 4, 2, 0, 6, 9]

let min = liczby[0]
let max = liczby[0]

for (let i = 0; i < liczby.length; i++) {
    const element = liczby[i];
    
    if(element > max)
        max = element

    if(element < min)
        min = element
}

forText.innerHTML = `Najmniejsza liczba: ${min}, Najwieksza liczba: ${max}`

min = liczby[0]
max = liczby[0]
i = 0;

do {
    const element = liczby[i];

    if(element > max)
        max = element

    if(element < min)
        min = element

    i++
} while (i < liczby.length);

dowhileText.innerHTML = `Najmniejsza liczba: ${min}, Najwieksza liczba: ${max}`