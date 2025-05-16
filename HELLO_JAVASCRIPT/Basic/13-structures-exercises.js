/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let Animals = ["gallina", "elefante", "pato", "leon", "tucan"]
console.log(Animals)

myArray = new Array ("zuricata", "caballo", "conejo", "pulpo", "gato")
console.log(myArray)

// 2. Añade dos más. Uno al principio y otro al final
myArray[0] = "cocodrilo"
myArray[4] = "dragon de komodo"//aunque esto no añade si no que los remplaza
myArray.push("canguro")

console.log(myArray) 

// 3. Elimina el que se encuentra en tercera posición
myArray.splice(2, 1)

console.log(myArray)

// 4. Crea un set que almacene cinco libros
let mySet = new Set()

//inicializar el set 
mySet = new Set(
    [//importante no olvidar poner corchetes
        'Alicia en el pais de las maravillas', 
        'el mundo de sofia', 
        'el hombre en busca de sentido',
        'La granaja',
        'El secreto'
    ]
)

console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido
mySet.add("orgullo y prejuicio")
mySet.add("La granaja")

console.log(mySet)

// 6. Elimina uno concreto a tu elección
mySet.delete('La granaja')
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre
let myMap = new Map()
console.log(myMap)

myMap = new Map(
    [//por que hay error aqui 
        ["1", 'Enero'],
        ["2", 'Febrero'],
        ["3", 'Marzo'],
        ["4", 'Mayo'],
        ["5", 'Junio'],
        ["6", 'Julio']
    ]
)
console.log(myMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(myMap.has("5"))
//como imprimir el valor


// 9. Añade al mapa una clave con un array que almacene los meses de verano
myMap.set("verano", ["Juniio", "julio", "Agosto"])

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
myArray2 = new Array(
    [
        'uno',
        'dos',
        'tres'
    ]
)

console.log(myArray2)

mySet2 = new Set(myArray2)

console.log(mySet2)

myMap2 = new Map(
    [
        ['numeros', mySet2],
    ]
)

console.log(myMap2)