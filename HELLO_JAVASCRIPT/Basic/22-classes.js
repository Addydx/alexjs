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
// person5.bank = "new slfdlfjslfd" //Bank no es # bank
console.log(person5)

//TODO: Getters y Setters

class GetSetPerson {
    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }
    get name(){
        return this.#name
    }

    set bank(newBank){
        this.#bank = newBank
    }

    get bank(){
        return this.#bank
    }
}

person6 = new GetSetPerson("Alex", 21, "papuchin", "993498498")

console.log(person6)
console.log(person6.name)

person6.bank = "new 309404890"
console.log(person6.bank)

//TODO: Herencia
//heredar las propiedades y comportamiento de una clase

class Animal {
    constructor(name){
        this.name = name
    }

    sound(){
        console.log("emite un sonido generico")
    }
}

class Dog extends Animal{

    sound() {
        console.log("guauuu")
    }

    run(){
        console.log("El perro corre")
    }

}

class Fish extends Animal{

    constructor(name, size){
        super(name)
        this.size = size
    }

    swim(){
        console.log("El pez nada")
    }

}

let myDog = new Dog("luck")
myDog.run()
myDog.sound()

let MyFish = new Fish("doradito", 1)
MyFish.swim()
MyFish.sound()


//TODO:Metodos estaticos


class MathOperations {

    static sum(a,  b){
        return a + b
    }

}

let myClass = new MathOperations()
// console.log(myClass.sum(5,10))

console.log(MathOperations.sum(2 , 2))//no es necesario crear una instancia
//diferente como en el caso de los animales 