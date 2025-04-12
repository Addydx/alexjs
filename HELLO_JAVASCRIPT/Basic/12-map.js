//que es una estructura de datos
//Estructuras para alamacenar un grupo de datos
//estructurar un conjunto de datos

//Map

//Declaracion

let myMap = new Map()
console.log(myMap)

//inicializacion

myMap = new Map([
    ["name", "Alex"],
    ["email", ["alexmendez"]],
    ["age", 20]
])
console.log(myMap)

//Metodos y propiedades

//Set

myMap.set("alias", "alexdev")
myMap.set("name", "alex emmanuel")//no puede haber repetidos en clave
//si la clave no existe, lo crea
//si la clave ya existe, lo actualiza
console.log(myMap)

//get
//recuperar valor

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

//has -> comprobar si una clave existe o no
console.log(myMap.has("surname"))
console.log(myMap.has("age"))

//delet
myMap.delete("email")
console.log(myMap)

//keys, vlues y entries
console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

//size
console.log(myMap.size)

//clear -> borrar todo el mapa 
myMap.clear()
console.log(myMap)
