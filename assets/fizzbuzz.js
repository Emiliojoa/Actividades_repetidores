let i = 0
do {
    i++
    if (i % 3 === 0 && i % 5 === 0){
        console.log(i+" FizzBuzz")
    }else if( i % 3 === 0){
        console.log(i+" Fizz")
    } else if ( i % 5 === 0){
        console.log(i+" Buzz")
    } else {
        console.log(i)
    }
} while( i < 15) //ejecuta el codigo almenos una vez



let o =0
    while (o <10){
        o++
        console.log(o)
    }