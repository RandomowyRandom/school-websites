
// get the day of the month
dzien1 = prompt("Podaj dzien");
// get the month
miesiac1 = prompt("Podaj miesiac");
// get the year
rok1 = prompt("Podaj rok");

dzien2 = prompt("Podaj dzien");
miesiac2 = prompt("Podaj miesiac");
rok2 = prompt("Podaj rok");

// create a date object
let date = new Date(rok1, miesiac1, dzien1);
let date2 = new Date(rok2, miesiac2, dzien2);

// check what date is later
if (date > date2) {
    document.writeln("Osoba 2 jest starsza");
}
else if (date < date2) {
    document.writeln("Osoba 1 jest starsza");
}

