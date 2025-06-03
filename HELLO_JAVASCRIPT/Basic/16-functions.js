//funciones 

//simple
function myFunc(){
    console.log("Hola funcion")
}

for(let i = 0; i < 5; i ++ ){
    myFunc()
}

//Con parametros 

function myFuncWithParams(name){//aqui se pasa el parametro
    console.log(`hola ${name}`)
}


myFuncWithParams("Alex")


//Funciones anonimimas 
//son funciones que no tienen un nombre definido 

const myFunc2 = function(name){
    console.log(`hola ${name}`)
}

myFunc2("alex mendez")

//Arrow functions
//TODO: Fuciones flecha

const myFunc3 = (name) => {
    console.log(`hola, ${name}`)
}

const myFunc4 = (name) => console.log(`hola, ${name}`)//pueden ser de una sola linea 


myFunc3("alex mendez ruiz")
myFunc4("alex mendez ruiz")


//Parametros

function sum(a, b){
    console.log(a+b)
}

sum(3, 2)
sum(5)
sum()

function defaultSum(a = 0, b= 0){
    console.log(a+b)
}

defaultSum()
defaultSum(5)
defaultSum(19, 3)
defaultSum(b = 5)

//Retorno de valores

function multi(a, b){
    return a * b
}

multi(2, 4)//no se muestra
let result = multi(8, 2)
console.log(result)

//TODO: Funciones anidadas

function extern(){
    console.log("Funcion externa")
    function intern(){
        console.log("funcion interna")
    }
    intern()
}

extern()
//Fuera del scope intenr()

//Funciones de orden superior 
//reciben otras funciones como argumento

function applyFunc(func, param){
    func(param)
}

applyFunc(myFunc4, "Fucnion de orden superior")

//forEach
//una funcion que nos sirve para ejecutar bucles asociados a elementos iterables

myArray = [1, 2, 3, 4]

mySet = new Set(["azaro", "armaf", "jean paul", 44,  true, "alexmendez"])

myMap = new Map([
    ["name", "Alex"],
    ["email", ["alexmendez"]],
    ["age", 20]
])

myArray.forEach(function (value){
    console.log(value)
})
myArray.forEach((value) => console.log(value));

mySet.forEach((value) => console.log(value));

myMap.forEach((value) => console.log(value));
