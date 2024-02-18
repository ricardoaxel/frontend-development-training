// Anonymous functions helps us to avoid calling autoexecutable



/* const ReactNonAutoExecutable = () => {
    const useState = (initialValue) => {
        let state = initialValue;
        
        const setterFunction = (newValue) => {
            state = newValue
        }

        return [state, setterFunction]
    }state

    return { useState }
};
 */
/* const {useState : nonAutoExecutableUseState} = ReactNonAutoExecutable(); */
/* const [hola2, setHola2] = nonAutoExecutableUseState("nonAutoExecutableUseState"); */


const ReactAutoExectuable = (() => {
    let state = [];
    let index = 0; 

    const useState = (initialValue) => {
        const localIndex = index
        index++
        
        if(!state[localIndex]) state[localIndex] = initialValue;
        
        const setterFunction = (newValue) => {
            state[localIndex] = newValue
        }
        return [state[localIndex], setterFunction]
    }

    const resetIndex = () => {
        index= 0
    }

    return { useState, resetIndex }
})();

const {useState, resetIndex} = ReactAutoExectuable;
const Component = () => {   
    const [hola, setHola] = useState("asda");
    const [hola2, setHola2] = useState("hola2");
    setHola("asda cambiado")
    setHola2("Hola 2 cambiado")
    console.log(hola, hola2)
}

Component();
resetIndex();
Component();
