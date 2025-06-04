//TODO: Exepcion

let myObject 
// console.log(myObject.email)

//TODO: Produce una exepcion

//TODO: Tratamiento de errores

//TODO: try-catch

try{
    //!! codigo que intenta ejecutar 
    console.log(myObject.email)
    console.log("finaliza la ejecucion")
} catch {
    //!! bloque de error
    console.log("se ha producido un error")
}

//TODO: Captura del error

try{
    console.log(myObject.email)
} catch(error) {
    console.log("se ha producido un error:", error.message)
}

//TODO: Finally

try{
    console.log(myObject.email)
} catch(error) {
    console.log("se ha producido un error:", error.message)
} finally {
    console.log("este codigo se ejecuta simpre")
}

//!!No esta soportado
// try{
//     console.log(myObject.email)
// } finally {
//     console.log("este codigo se ejecuta simpre")
// }

//TODO: Lanzamiento de errores

//TODO: throw

// throw new Error("se ha producido un error"); //!! error que he producido yo

console.log("------throw")//FIXME:

function sumIntegers(a, b){
    if(typeof a !== "number" || typeof b !== "number"){
        throw new TypeError("esta operacion solo suma numeros")
    }
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        throw new Error("Esta operacion solo suma numeros enteros")
    }
    if(a ==0 || b == 0){
        throw new SumZeroIntegerError("Se esta intentando sumar cero", a, b)
    }
    return a + b
}

try {
    console.log(sumIntegers(4, 10))
    // console.log(sumIntegers(3.3, 10))
    console.log(sumIntegers("3", 10))
    // console.log(sumIntegers(4, "10"))
    // console.log(sumIntegers("4", "10"))                                                 
} catch(error){
    console.log("Se ha producido un error:", error.message)
}

//TODO: Como capturar varios tipos de errores

try {
    console.log(sumIntegers(4, 10))
    // console.log(sumIntegers(3.3, 10))
    console.log(sumIntegers("3", 10))
    // console.log(sumIntegers(4, "10"))
    // console.log(sumIntegers("4", "10"))                                                 
} catch(error){
    if(error instanceof TypeError ){
        console.log("se ha producido un error de tipo:", error.message)
    } else if (error instanceof Error){
        console.log("se ha producido un error:", error.message)
    }
}

//TODO: Crear exepciones perzonalizadas

class SumZeroIntegerError extends Error{
    constructor(message, a, b){
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}

try {
    console.log(sumIntegers(0, 10))                                                 
} catch(error){
    console.log("se ha producido un error", error.message)
    error.printNumbers()
}