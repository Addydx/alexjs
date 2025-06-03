//TODO: Clases

class Person{//!! Persona como una clase no como un objeto
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

//TODO: Sintaxis

let person = new Person("Alex", 22, "Mendez")
console.log(person)
let person2 = new Person("Alex", 22, "Mendez")
console.log(person2)

console.log(typeof person)

//TODO: Valores por defecto 

class DefaultPerson {
    constructor(name = "Nombre por defecto", age = 0, alias= "sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person3 = new DefaultPerson("alex", 25)
console.log(person3)

//TODO: Acceso a propiedades

console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "papuchin"
console.log(person3.alias)

//TODO: Funciones en clases

class PersonWithMethod {
    constructor(name = "Nombre por defecto", age = 0, alias= "sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
    walk(){
        console.log("La persona camina")
    }
}

let person4 = new PersonWithMethod("Alex", 22, "Papuchin")
person4.walk()

//TODO: Propiedades privadas

class PrivatePerson {
    #bank
    constructor(name , age , alias , bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }
    pay(){
        this.#bank
    }
}

let person5 = new PrivatePerson("Alex Mendez", 20, "Papuchin", "39043940394")
// person5.bank

// console.log(person5.bank)//!! no se puede acceder