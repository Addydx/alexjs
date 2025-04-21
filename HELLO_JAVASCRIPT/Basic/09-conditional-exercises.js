/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
const nombre = "alex"
const nombreingresado  = "alex";
if(nombre === nombreingresado ){
    console.log(nombre);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
const usuario = "admin"
const contraseña = "1234"
const useringresado = "admin"
const contraseñaestablecida = "1234"
if(usuario === useringresado && contraseña === contraseñaestablecida){
    console.log("tus datos son correctos")
}else{
    console.log("los datos son incorrectos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
const num1 = 1
const num2 = -2
if(num1 >0 ){
    console.log("el numero es positivo")
}else if(num1 < 0){
    console.log("el numero es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
const edad = 15
const mayoriaEdad = 18
if(edad >= mayoriaEdad ){
    console.log("Eres mayor de edad ")
}else if(edad < mayoriaEdad ){
    console.log("te faltan :", mayoriaEdad - edad, "años")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
const message = edad >= 18 ? "eres adulto" : "eres menor"//tenia un error en el operador , no era =>
console.log(message)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
const mes = 1
const op = 1
while(op = 1){
    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7