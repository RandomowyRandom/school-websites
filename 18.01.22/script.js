const rokInput = document.getElementById('rok');
const rokButton = document.getElementById('check');
const rokOutput = document.getElementById('rokOutput');

// check if the year is a leap year
function isLeapYear(year) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

rokButton.addEventListener('click', e => {
    e.preventDefault();
    const rok = rokInput.value;
    if (isLeapYear(rok)) {
        rokOutput.innerHTML = `${rok} jest przestępny`
    } else {
        rokOutput.innerHTML = `${rok} nie jest przestępny`
    }
});

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');

const triangleButton = document.getElementById('check2');
const triangleOutput = document.getElementById('triangleOutput');

// check if the triangle exists
function isTriangle(a, b, c) {
    return (a + b > c) && (b + c > a) && (a + c > b);
}

triangleButton.addEventListener('click', e => {
    e.preventDefault();
    const a = num1.value;
    const b = num2.value;
    const c = num3.value;
    if (isTriangle(a, b, c)) {
        triangleOutput.innerHTML = `${a}, ${b}, ${c} to trójkąt`
    } else {
        triangleOutput.innerHTML = `${a}, ${b}, ${c} nie jest trójkąt`
    }
})


// 1. napisz program ktory wczyta jako parametr wejsciowy funkcji aktualny rok. na stronie wypisze czy dany rok jest przestepny czy nie

// 2.napisz programktry wczyta od uzytkownika 3 liczby calkowite nastepnie wypisze na ekranie czy jesli przyjac ze sa to dlugosci boku trojkata da sie zrobic trojkat