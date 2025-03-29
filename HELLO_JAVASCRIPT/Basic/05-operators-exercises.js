/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
console.log(5 + 5);//suma
console.log(5-5);//resta
console.log(5 * 5 ); //Multiplicacion
console.log(5 /5 ); //Division
console.log(5 % 5)//Modulo
console.log(5 ** 5)//Exponente

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let suma = 5;
suma += 5;
console.log(suma)

let resta = 5
resta -= 5;
console.log(resta)

let Multiplicacion = 5
Multiplicacion *= 5
console.log(Multiplicacion)

let Division = 5
Division /=5
console.log(Division)


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(5 > 4);
console.log(30 < 40)
console.log(5 >= 5)
console.log(5 <= 5);
console.log(5 == 5)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(5  < 4)
console.log(30 > 40)
console.log( 5 >=6)
console.log(30 <= 5)
console.log(5 == 3)

// 5. Utiliza el operador lógico and
console.log(5 > 4 && 5 < 6);

// 6. Utiliza el operador lógico or
console.log(5 > 2 || 4 > 6 );

// 7. Combina ambos operadores lógicos
console.log(5 > 2 && 4 > 6 || 5 > 3);

// 8. Añade alguna negación
console.log(!(4> 2 && 4 > 6)  || 5 > 3);

// 9. Utiliza el operador ternario
const age = 18
age >= 18 ? console.log('Eres mayor de edad') : console.log('Eres menor de edad')

// 10. Combina operadores aritméticos, de comparacion y logicos
console.log((5 + 5) > 18 && (5 + 10) < 20 || 5 > 18)