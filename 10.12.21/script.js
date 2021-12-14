// prompt a and b and check if they are numbers
const a = prompt('Podaj a')
const b = prompt('Podaj b')

const suma = (a, b) => {
    return a + b
}

const iloczyn = (a, b) => {
    return a * b
}

const iloraz = (a, b) => {
    return a / b
}

if (isNaN(a) || isNaN(b)) {
    alert('Podaj liczby')
    document.write('<h2>Nie podano liczb</h2>')
} else {

    skladnikA = parseInt(a)
    skladnikB = parseInt(b)

    document.write(`<h2>Suma: ${suma(skladnikA, skladnikB)}</h2>`)
    document.write(`<h2>Iloczyn: ${iloczyn(skladnikA, skladnikB)}</h2>`)
    document.write(`<h2>Iloraz: ${iloraz(skladnikA, skladnikB)}</h2>`)
}