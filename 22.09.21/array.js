let array = [2, 5, 7, 2, 69, 1, -2137, 2137]

// array.forEach(e => {
//     document.write(e + "<BR>")
// })

let min = array[0]
let max = array[0]

array.forEach(e => {

    if(e > max){
        max = e
    }

    if(e < min) {
        min = e
    }
})

document.write(`Najwieksza liczba: ${max} <BR>`)
document.write(`Najmniejsza liczba: ${min}`)