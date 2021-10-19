const check = document.getElementById("staly-klient")
const count = document.getElementById("count")
const calculation = document.getElementById("calc")
const result = document.getElementById("result")

calculation.onclick = () => {
    let liczbaOgloszen = count.value
    let upust = check.checked ? 0.3 : 0  
    let koszt = 0

    if(liczbaOgloszen > 40){
        koszt = liczbaOgloszen * (2 - upust)
    }
    else{
        koszt = liczbaOgloszen * (3 - upust)
    }

    result.innerHTML = `Twoje ogłoszenia będą kosztować: ${koszt} PLN`
}