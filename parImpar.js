let i = parseFloat(prompt("ingrese un numero"))
do {
    if ( i % 2 === 0){
        console.log(i+" par")
    } else {
        console.log (i+" impar")
    }
    i++;
} while(i <= 10)