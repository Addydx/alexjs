//loops o bucles

//for

for (let i = 0; i <= 4; i++){
    console.log(`hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < numbers.length; i++){
    console.log(`Elemento ${numbers[i]}`)
}

//while 

let i = 0;//revisar lo que viene definido de antes
while (i < 5){
    console.log(`hola ${i}`)
    i ++;
}

//blucle infinito 
/*
while(true){

}
*/

//do while 

i = 6;
do{
    console.log(`hola ${i}`)
    i++
}while(i < 5)

//for of 
//recorer valores de algo que sea iterable (estructura de datos)
//con este podemos revisar todos los valores que tenemos en las estructuras

myArray = [1, 2, 3, 4]
mySet = new Set(["azaro", "armaf", "jean paul", 44,  true, "alexmendez"])
myMap = new Map([
    ["name", "Alex"],
    ["email", ["alexmendez"]],
    ["age", 20]
])

myString = "Hola, javascript"

console.log("my array")
for(let varlor of myArray){
    console.log(varlor)
}

console.log("my set")
for(let varlor of mySet){
    console.log(varlor)
}

console.log("my map")
for(let varlor of myMap){
    console.log(varlor)
}

for(let varlor of myString){
    console.log(varlor)//recorre datos 
}

//Buenas practicas
//no provocar un bucle infinito 

//break y continue
for (let i = 0; i<10; i++){
    if (i == 5) {
        continue
    } else if(i == 7){
        break
    }
    console.log(`hola ${i}`)
}