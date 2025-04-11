//array

//declaracion

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

//inicializacion

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3 ,4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

//
myArray = ["azaro", "armaf", "jean paul", 44,  true]
myArray2 = new Array("azaro", "armaf", "jean paul", 44,  true), 

console.log(myArray)
console.log(myArray2)


myArray2 = new Array(3)
myArray2[2] = "azaro"
//myArray2[0] = "armaf"
myArray2[1] = "jean paul"

console.log(myArray2)
//
myArray = []
myArray[2] = "azaro"
//myArray[0] = "armaf"
myArray[1] = "jean paul"

console.log(myArray)

//metodos comunes

myArray =[]

// push y pop 

myArray.push("Alex")
myArray.push("Mendez")
myArray.push("Ruiz")
myArray.push(33)//push agrega elmentos al final del array

console.log(myArray)

console.log(myArray.pop())
myArray.pop()//elimina el ultimo elemento del array

console.log(myArray)

//shift y unshift

myArray.shift()//eliminar el primer elemento del array
console.log(myArray)

myArray.unshift("Alex", "Mendesz")
console.log(myArray)

//length

console.log(myArray.length)

//clear
//ser capaces de borrar un array

myArray = []
//myArray.length  = 0 // alternativa 
console.log(myArray)

//slice

myArray = ["azaro", "armaf", "jean paul", 44,  true]

let myNewArray = myArray.slice(0, 2)

  //devolver una copia superficial de una porcion
//nuevo array pero del pedaso que yo quiero

console.log(myArray)
console.log(myNewArray)

//splice

myArray.splice(1, 3)//desde que incide quieres empezar, y cuantos quieres eliminar 
console.log(myArray )

myArray = ["azaro", "armaf", "jean paul", 44,  true]

myArray.splice(1, 2, "nuevo elemento")//todo esto fue manipulacion de arrays
console.log(myArray)