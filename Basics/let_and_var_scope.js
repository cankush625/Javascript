let iAmGlobal = 'global';
console.log(iAmGlobal);

if (true) {
    let iAmLocal = 'local';
    iAmGlobal = 'Ankush';
    console.log(iAmGlobal);
    console.log(iAmLocal);
}

console.log(iAmGlobal);