/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
console.log("Hola" + " " + "Alex");

// 2. Muestra la longitud de una cadena de texto
let msj = "hola";
console.log(msj.length)

// 3. Muestra el primer y último carácter de un string
console.log(msj[0]);
console.log(msj[msj.length[-1]]);

// 4. Convierte a mayúsculas y minúsculas un string
console.log(msj.toUpperCase());
console.log(msj.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let saludo = `hola amigo 
dime 
que tal 
te la estas 
pasando`;
console.log(saludo);


// 6. Interpola el valor de una variable en un string
let nombre = "alex"
console.log(`hola mi nombre es : ${nombre}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let espacio = "     "
console.log(espacio.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
let palabra = "chango"
console.log(palabra.includes("chango"))

// 9. Comprueba si dos strings son iguales
console.log(palabra == nombre)

// 10. Comprueba si dos strings tienen la misma longitud
let msj2 = "casa"
console.log(msj2.length == nombre.length);