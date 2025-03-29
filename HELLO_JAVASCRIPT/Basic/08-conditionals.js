//if, else if, else

//if (si)

let age = 42

if(age == 42){
    console.log('la edad es 42')
}

//else (si no)
//let message = " "
 if(age == 42){
    console.log("la edad es 42")
 }else {
    console.log("la edad no es 42")
}

//else if(si no, si)
if(age == 42){
    console.log("la edad es 42")
 }else if(age < 18){
    console.log("es menor de edad")
 }else {
    console.log("la edad no es 42 ni es menor de edad")
}


//Operador ternario

const message = age == 42 ? "la edad es 42" : "la edad no es 42"
console.log(message)

//switch

let day = 5
let dayName

switch (day){
    case 0:
        dayName = "lunes"
        break;
    case 1:
        dayName = "martes"
        break;
    case 2:
        dayName = "miercoles"
        break;
    case 3:
        dayName = "jueves"
        break;
    case 4:
        dayName = "viernes"
        break;
    case 5:
        dayName = "sabado"
        break;
    case 6:
        dayName = "domingo"
        break;
    default:
        dayName = "numero de dia incorrecto"
        break
}

console.log(dayName)
