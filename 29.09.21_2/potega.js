const podstawa = document.getElementById('podstawa')
const wykladnik = document.getElementById('wykladnik')
const output = document.getElementById('output')

document.getElementById('submit').onclick = () =>{
    let wynik = podstawa.value

    console.log('woiuegbweu')

    for (let i = 0; i < wykladnik.value - 1; i++) {
        wynik *= podstawa.value
    }

    output.innerHTML = `Wynik: ${wynik}`
}