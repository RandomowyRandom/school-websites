// zadanie 1
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// zadanie 2
for (let i = 0; i < 16; i++) {
  console.log(i);
  if (i == 10) break;
}

// zadanie 3
for (let i = 5; i < 16; i++) {
  if (i == 10) continue;
  console.log(i);
}

// zadanie 4
let i = 1;
while (i < 11) {
  document.write(`${i} `);
  i += 2;
}

// zadanie 5
let j = 1;
for (let i = 0; i < 20; i++) {
  j *= 2;
  console.log(j);
}

// zadanie 6
for (let i = 1; i < 21; i++) {
  console.log(i);
  console.log(-i);
}
