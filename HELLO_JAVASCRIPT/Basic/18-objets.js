//Objects

//coleccion de propiedades

// Sintaxis

let person = {
    name : "Alex",
    age : 20,
    alias : "Alex"
}

//TODO: Acceso a las propiedades

//Notacion punto
console.log(person.name)

// Notacion de corchetes
console.log(person["name"])

//TODO: Modificacion

person.name = "Alex Mendez"
console.log(person.name)

console.log(typeof person.age)
person.age = "37"
console.log(person.age)
console.log(typeof person.age)

//TODO: Eliminacion de propiedades

delete person.age

console.log(person)

//TODO: Nueva propiedad 

person.email = "alexmendez@gmail.com"

console.log(person)//se pueden añadir propiedades

person["age"] = 27

console.log(person)

//TODO: Metodos(funciones)

let person2 = {
    name : "Pepito",
    age : 22,
    alias : "bolillo",
    walk : function(){
        console.log("la pesona camina")
    }
}

person2.walk()


//TODO: Anidacion de objects
let person3 = {
    name : "Pepito",
    age : 22,
    alias : "bolillo",
    walk : function(){
        console.log("la pesona camina")
    },
    job : {
        name : "programador",
        exp : 15 ,
        work : function(){
            console.log(`La persona de  ${this.exp} años de experiencia  trabaja`)
        }
    }
}

console.log(person3)
console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

//TODO: Igualdad de objects
let person4 = {
    name: "Alex Mendez",
    alias : "Alex",
    email: "alexmendez@gmail.com",
    age: 27
}

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person == person4)

console.log(person.name == person4.name)

//TODO: Iteracion

for(let key in person4){
    console.log(key + ": " + person4[key])
}

//TODO: FUNCIONES COMO OBJECTS

function Person(name, age){
    this.name = name
    this.age = age
}

let person5 = new Person("alex", "20")//!! deberia ser una clase
console.log(person5)

console.log(person5.name)

console.log(typeof person5)
console.log(typeof person4)