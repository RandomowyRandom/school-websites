const first_input = document.getElementById('first_num')
const second_input = document.getElementById('second_num')
const button = document.getElementById('check_button')
const result = document.getElementById('result_box')

button.onclick = () => {
    let a = first_input.value
    let b = second_input.value

    if(a > b){
        result.innerText = 'Pierwsza liczba jest wieksza'
    }
    else if (a === b){
        result.innerText = 'Liczby sa rowne'
    }
    else{
        result.innerText = 'Druga liczba jest wieksza'
    }
}