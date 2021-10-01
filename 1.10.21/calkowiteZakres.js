let a = 0
let b = 0

do {

    a = prompt('Podaj a:')
    b = prompt('Podaj b:')

} while (a > b);

for (let i = a; i <= b; i++) {
    document.write(`${i}<BR>`)
}