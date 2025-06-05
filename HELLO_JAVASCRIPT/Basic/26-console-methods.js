//TODO: console

//TODO: Log

console.log("Hola, javascript")

//TODO: Error

console.error("este es un mensaje de error")
console.error("error al conectarse a la base de datos :" , new Error("Conexion falllida"))

//TODO: warn

console.warn("este es un mensaje de advertencia")

//TODO: info

console.info("Este es un mensaje de informacion adicional")

//TODO: Table

let data = [
    ["Alex", 20],
    ["diluc", 32]
]

console.table(data)

data = [
    {name : "Alex", age: 20},
    {name :"diluc", age: 32}
]

console.table(data)

//TODO: group

console.group("USUARIO")
console.log("nombre : alex")
console.log("edad : 20")
console.groupEnd()

console.log("sjflsdkfl")

//TODO: time

console.time("Tiempo de ejecución 2")

for (let i = 0; i < 10000; i++) {

}

console.time("Tiempo de ejecución 1")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 2")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 1")

//TODO: assert

//!!muestr mensaje de error si lo que evalua es falso

let age = 12
console.assert(age>= 18, "el usuario debe ser mayor de edad")

//TODO: Count

console.count("Click")
console.count("Click")
console.count("Click")

console.countReset("Click")
console.count("Click")

//TODO: Trace

function funcA () {
    funcB()
}

function funcB () {
    console.trace("Seguimiento de la ejecucion")
}

funcA()

//TODO: Clear

// console.clear()