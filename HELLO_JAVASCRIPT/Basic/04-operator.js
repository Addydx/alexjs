//Operadores

//Operadores Aritmeticos

let a = 5
let b = 10

console.log(a + b)//suma
console.log(a - b)//resta
console.log(a * b)//multiplicacion
console.log(a / b)//division

console.log(a % b)//modulo
console.log(a **b)//exponente

a++
console.log(a)//incremento

b--
console.log(b)//decremento

//Operadores de Asignacion

let myVariable = 2
console.log(myVariable);
myVariable += 2
console.log(myVariable)

//Operadores de comparacion

console.log(a > b)//mayor que 
console.log(a < b)//menor que 
console.log(10 >= 10)//mayor o igual que 
console.log(a <= b)//menor o igual que 
console.log(a == b)//igual que. igualdad por valor
console.log(a == 6)
console.log(a == "6")
console.log(a === a)//igualdad por identidad(por tipo y valor)
console.log(a === "6");
console.log( a != 6);//distinto de
console.log(a !== "6")
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "")

console.log(undefined == null)
console.log(undefined === null)

//Truthy Values (valores verdaderos)
//todos los numeros positivos y negativos exepto el 0
//todas las cadenas de texto menos las vacias
//El boolean true

//Falsy Values (valores falsos)
//0
//0n
//null
//undefined
//Nan
//El boolean false 
//cadenas de texto vacio


//Operadores Logicos

//and &&
console.log( 5 > 10 && 15 > 20)
console.log( 5 < 10 && 15 < 20)
console.log( 5 < 10 && 15 > 20) 
console.log( 5 < 10 && 15 < 20)
console.log( 5 < 10 && 15 > 20 && 30 > 40) 

//or ( ||)
console.log( 5 > 10 || 15 > 20)
console.log( 5 < 10 || 15 > 20) 
console.log( 5 < 10 || 15 > 20) 


//not ( ! )
console.log( !(5 > 10 && 15 > 20))
console.log(  !(5 > 10 || 15 > 20))

//Operadores ternarios
const isRaning = false

isRaning ? console.log("Esta lloviendo") : console.log("No esta lloviendo") 