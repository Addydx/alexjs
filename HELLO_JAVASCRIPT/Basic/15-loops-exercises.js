/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for(let i = 1; i <=20; i++){
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0
for(let i = 1; i <=100; i++){
    suma = suma + i
}
console.log(suma)
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
let numero =0
console.log("imiprimir numeros pares:")
for(let k =1; k <=50; k++){
    numero = k
    if (k % 2 == 0 ) {
        console.log(k)
    }else {
        console.log('numero impar')
    }
}
console.log('no tengo duda, soy un genio')

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let myArray = new Array()

myArray = new Array('alex', 'maria', 'isabel', 'rolando')
console.log(myArray[2])
console.log('bucle para mostrar los nombres');
let num = myArray.length
for (let i = 0; i < num; i++) {
    console.log(myArray[i])
}

    // 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
    let palabra = ('samuel')
    myArray2 = ['a', 'e', 'i', 'o', 'u']
    console.log(myArray2)
    let cont = 0
    console.log('prueba', palabra.length)
    for(let valor of palabra){
        console.log(valor)
        if (myArray2.includes(valor)) {
            console.log('tiene vocal')
            cont++
        }
    }
    console.log(cont)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [1, 2, 3, 4]
console.log(numeros)
let numsuma = 1
for (let i = 0; i < numeros.length; i++) {
    numsuma = numsuma* numeros[i]
    //console.log(numsuma)
    
}
console.log(numsuma)


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
const cinco =5
for (let i = 1; i <= 10; i++) {
    console.log(i +'x' + 5 + '=' + i*cinco)
    
}
// 8. Usa un bucle para invertir una cadena de texto
let texto = 'hola'
console.log(texto.length)
for (let i = 0; i < numeros.length; i--) {
    const element = numeros[i];
    
}

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
for (let i = 0; i < 10; i++) {
    
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10