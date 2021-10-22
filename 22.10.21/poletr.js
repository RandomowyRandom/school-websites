const podstawa = document.getElementById('podstawa-input')
const wysokosc = document.getElementById('wysokosc-input')
const result = document.getElementById('result')
const button = document.getElementById('submit')

button.onclick = () =>{
    let w_podstawa = parseInt(podstawa.value) 
    let w_wysokosc = parseInt(wysokosc.value)

    if(w_wysokosc <= 0 && w_podstawa <= 0){
        result.innerHTML = 'Wysokosc i podstawa musi byc wieksza od 0'
    }
    else if (w_wysokosc <= 0){
        result.innerHTML = 'Wysokosc musi byc wieksza od 0'
    }
    else if(w_podstawa <= 0){
        result.innerHTML = 'Podstawa musi byc wieksza od 0'
    }
    else{
        let pole = (w_wysokosc * w_podstawa) / 2
        result.innerHTML = `Pole trojkata o podstawie ${w_podstawa} i wysokosci ${w_wysokosc} jest rowna ${pole}`
    }
}