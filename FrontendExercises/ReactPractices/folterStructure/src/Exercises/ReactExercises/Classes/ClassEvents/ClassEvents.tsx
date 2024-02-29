import { Component } from "react";

export class ClassEventsES6 extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            counter: 0
        }

        this.add = this.add.bind(this)
        this.subtract = this.subtract.bind(this)
    }  
    
    add(){
        console.log("Sumando")
        this.setState({
            counter: this.state.counter + 1
        })
    }

    subtract(){
        console.log("Subtract")
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render(){
        return(
            <div>
                <h3>Events on Class Components ES6</h3>
                <h4>{this.state.counter}</h4>
                <nav>
                    <button onClick={this.add}>+</button>
                    <button onClick={this.subtract}>-</button>
                </nav>
            </div>
        )
    }
}

// Property initializers
export class ClassEventsES7 extends Component {
    state = {
        counter:0
    }

    add =() => {
        console.log("Sumando")
        this.setState({
            counter: this.state.counter + 1
        })
    }

    subtract = () => {
        console.log("Subtract")
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render(){
        return(
            <div>
                <h3>Events on Class Components ES7</h3>
                <h4>{this.state.counter}</h4>
                <nav>
                    <button onClick={this.add}>+</button>
                    <button onClick={this.subtract}>-</button>
                </nav>
            </div>
        )
    }
}