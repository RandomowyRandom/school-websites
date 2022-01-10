let tab1 = [7, 3, 1, 6, 9, 5, 4, 10, 2, 2]

// zadaanie 1
document.write(`<h1>Element 5 tablicy: ${tab1[4]}</h1>`)
tab1[6] = 12

// zadanie 2
let tab2 = tab1.slice()

// zadanie 3
let tab3 = []

for (i = 0; i < tab1.length; i++) {
    tab3[i] = tab1[i] + tab2[i]
}

document.write(`<h1>Tablica tab3: ${tab3}</h1>`)

// zadanie 4
tabTmp = tab1.slice()
tabTmp.reverse()
tab2 = tabTmp.slice()

document.write(`<h1>Tablica tab1: ${tab1}</h1>`)
document.write(`<h1>Tablica tab2: ${tab2}</h1>`)