function Animal(name,gender){
    this.name = name;
    this.gender = gender;
}

Animal.prototype.sonar = function(){
    console.log("Hi my name is", this.name)
}

const snoopy = new Animal('Snoopy', 'male')

snoopy.sonar()



function Perro(name, gender, size){
    this.super = Animal;
    this.super(name, gender);
    this.size = size
}
Perro.prototype = new Animal()
Perro.prototype.constructor = Perro;

Perro.prototype.sonar = function(){
    console.log("Soy un perro llamado", this.name)
}


const snoopyPerro = new Perro("SnoopyPerro", "male")

snoopyPerro.sonar()
console.log(snoopyPerro)