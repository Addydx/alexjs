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