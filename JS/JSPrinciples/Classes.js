class Animal {
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }

    sonar(){
        console.log("hello i'm", this.name)
    }
}
const mitsuki = new Animal('Mitsuki', "Female")
mitsuki.sonar()

// Inheritance

class Perro extends Animal {
    constructor(name, gender, size){
        //super calls the constructor of the parent class
        super(name,gender)
        this.size = size;
        this.raza = null;
    }

    sonar(){
        console.log("Hello im a dog and my name is", this.name, "im", this.size, "size")
    }
    static about(){
        console.log("Class only for dogs")
    }

    set setRaza(raza){
        this.raza = raza
    }
    get getRaza(){
        return this.raza
    }
}
const jacko = new Perro("Jackovich", "Not sure", "Micro")
jacko.sonar()
Perro.about()

console.log(jacko.getRaza)
jacko.setRaza = "rarito"
console.log(jacko.getRaza)



