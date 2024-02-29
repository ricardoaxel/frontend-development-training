function main(){
    this.place = "Global Context"   
    this.name = "Global Name"

    function hello(salute, to){
        console.log(`${salute} ${to}, from ${this.place}`)
    }

    // hello("Hi", "Ronald");

    const obj = {
        place : "Object Context"
    }

    // Call & Apply
    // hello.call(obj, "Hello","Axel");
    // hello.apply(obj, ["What's up", "Ricardo"]);

    // Bind
    const person = {
        name:"Axel",
        hello:function(){
            console.log(`Hello ${this.name}`)
        },
        helloArrow: () => console.log(`Hello ${this.name}`)
    }

    person.hello();
    person.helloArrow();

    const anotherPerson = {
        helloGlobal: person.hello.bind(this),
        helloPerson: person.hello.bind(person)
    }

    anotherPerson.helloGlobal()
    anotherPerson.helloPerson()
}

main();