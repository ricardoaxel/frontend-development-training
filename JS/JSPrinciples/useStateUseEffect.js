const Reactly = (() => {
    let hooks = [];
    let index = 0; 

    const useState = (initialValue) => {
        const localIndex = index
        index++
        
        if(!hooks[localIndex]) hooks[localIndex] = initialValue;
        
        const setterFunction = (newValue) => {
            hooks[localIndex] = newValue
        }
        return [hooks[localIndex], setterFunction]
    }

    const resetIndex = () => {
        index= 0
    }

    const useEffect = (callback, dependencyArray) => {
        let hasChanged = true;
        const oldDependencies = hooks[index];

        if(oldDependencies){
            hasChanged = false;

            dependencyArray.forEach((dependency, index) => {
                const oldDependency = oldDependencies[index]
                const areTheSame = Object.is(dependency, oldDependency)
                if(!areTheSame) hasChanged = true
            })
        }
        
        if(hasChanged) callback()

        hooks[index] = dependencyArray;

        index++;
    }

    return { useState, useEffect, resetIndex }
})();

const {useState,useEffect, resetIndex} = Reactly;
const Component = () => {   
    const [counter, setCounter] = useState(1);
    const [name, setName] = useState("ax");
    console.log(counter,name)

    useEffect(() => {
        console.log("hello fro useEffect")
    }, [counter])

    if(counter < 10){
        setCounter(counter+1)
    }
    if(name !== "papas"){
        setName("papas")
    }
}

Component();
resetIndex();
Component();
resetIndex();
Component();
resetIndex();
Component();
resetIndex();
Component();
resetIndex();
Component();
resetIndex();
Component();
resetIndex();
Component();
resetIndex();
Component();
resetIndex();
Component();
resetIndex();
Component();


