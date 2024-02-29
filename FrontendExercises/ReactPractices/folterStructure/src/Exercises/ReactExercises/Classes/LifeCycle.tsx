import { Component } from "react";

export class LifeCycle extends Component {

    constructor(props){
        super(props)
        console.log("0.- Component initialized")

        this.state = {
            hour: new Date().toLocaleDateString()
        }

        this.temporizer = null;
    }

    componentDidMount(): void {
        console.log("1.- Component in DOM")

    }

    // Allow to pass the previous props and state before updating the new state
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>): void {
        console.log("2.- State or props on component have changed")
        console.log(prevProps, prevState)
    }

    componentWillUnmount(): void {
        console.log("3.- Component removed from DOM")
        
    }
    
    tictac = () => {
        this.temporizer = setInterval(() => {   
            this.setState({
                hour: new Date().toLocaleTimeString()
            })
        },1000)
    }

    start = () => {
        this.tictac();
    }

    stop = () => {
        clearInterval(this.temporizer)
    }

    
    render(){
        console.log("4.- Component render or rerender for a change on DOM")
        return (
            <>
                <h3>LifeCycle</h3>
                <h3>{this.state.hour}</h3>
                <button onClick={this.start}>start</button>
                <button onClick={this.stop}>stop</button>
            </>
        )

    }

}