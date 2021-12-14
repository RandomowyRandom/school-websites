// pierwsze zadanko
let tablica = ['Jeden', 'Dwa', 'Trzy'];
document.write(tablica[2]+'<br />');

// zadanko drugie
let tablica = new Array();
let a;
for(let i=0; i<30; i++){
    a = Math.random();
    a *= (100 - 10);
    a += 10;
    a = Math.round(a);
    tablica[i] = a;
}

let tablica = [10, 20, 67, 99, 67, 22, 11, 6, 1, 89]

// zadanko trzecie
let min = tablica[0];

for(let i=0; i < tablica.length; i++){
    if(tablica[i]<min){
        min = tablica[i];
    }
}