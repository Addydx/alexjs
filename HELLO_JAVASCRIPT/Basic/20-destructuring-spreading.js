//TODO: desestructuración y propagacion
//permite extraer valores de array o objetos y asignarlos a variables de manera consisa

let myArray = [1, 2, 3 ,4]

let person = {
    name : "Alex",
    age : 20,
    alias : "Papuchin"
}

myArray.push(5)

myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)


//TODO: Desestructuración 

//TODO: Sintaxis arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray //!! la 4 no tiene valor
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

//TODO: Sintaxis arrays con valores predeterminados

let [myValue5 = 0, myValue6 = 0, myValue7= 0, myValue8 = 0, myValue9 = 0] = myArray 
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

//TODO: Ignorar elementos del array
console.log("ignorar elementos del array")

let [myValue10, , , myValue13, ] = myArray 
console.log(myValue10)
console.log(myValue13)

//TODO: Sintaxis objects

// let [name, age, alias] = person
// console.log(name)
// console.log(age)
// console.log(alias)



// TODO: Sintaxis objects con valores predeterminados
// let { name2, age2, alias2, email  = "email@gmail.com"} = person
// console.log(name2)//no existen
// console.log(age2)
// console.log(alias2)
// console.log(email)

//TODO: Sintaxis objects con nuevos nombres de variables

let { name: name3, age: age3, alias: alias3 }= person//!!el orden no importa, lo que importa es el nombre
console.log(name3)
console.log(age3)
console.log(alias3)

//TODO: Objetos anidados
let person3 = {
    name : "Pepito",
    age : 22,
    alias : "bolillo",
    walk : function(){
        console.log("la pesona camina")
    },
    job : {
        name : "programador",
        exp : 15 ,
        work : function(){
            console.log(`La persona de  ${this.exp} años de experiencia  trabaja`)
        }
    }
}

let {name: name4, job: { name : jobName} } = person3

console.log(name4)
console.log(jobName)

//TODO: Propagacion (...)
let myArray2 = [...myArray] //!! Copia
console.log(myArray2)
//BUG: 
//OPTIMIZE:
//NOTE: 
//WIP:
//TODO: 
//FIXME:

//HACK:
let myArray3 = [...myArray, 5, 6]
console.log(myArray3)

//TODO: Combinacion de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]
console.log(myArray4)

//TODO: Sintaxis objects
let person4 = {...person, email: "alexmendez@gmail.com"}
console.log(person4)

//TODO: Copia de Objects
let person5 = {...person}
console.log(person5)