//set

//declaracion
 
let mySet = new Set()
//let mySet2 = {} NO ES LA FORMA DE DEFINIR UN SET

console.log(mySet)
//console.log(mySet2)

// inicializacion 
mySet = new Set(["azaro", "armaf", "jean paul", 44,  true, "alexmendez"])

console.log(mySet)

//metodos comunes

//add y delete

mySet.add("https://alex")
console.log(mySet)

//delete
mySet.delete("https://alex")//indicar cual es el elemento que queremos borrar
//le tengo que indicar que es el elementos que quiero borrar, en este caso "https://alex"
console.log(mySet)

console.log(mySet.delete("azaro"))
console.log(mySet.delete(3))
console.log(mySet)

//has 

console.log(mySet.has("azaro"))
console.log(mySet.has("jean paul"))

//size
console.log(mySet.size)

//convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

//convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

//
mySet.add("alexmendez")
mySet.add("alexmendez")
mySet.add("AlexMendez")
console.log(mySet)
