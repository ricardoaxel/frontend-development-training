import { useEffect, useState } from "react"
import "./Queue.css"

export const Queue = () => {
    const [itemsInPersonCart, setItemsInPersonCart] = useState(0)
    const [lines, setLines] = useState([
        [0,5,2], [7], [2], [1], [3]
    ])

    function addItemsInPersonCartToLine(e: React.FormEvent<HTMLFormElement>) {
        // 1.- Loop though all lines,
        e.preventDefault();
        let leastItemAmout = 1e9;
        let lineWithLeast: number[] | undefined;

        // 2.-find the line with the LEAST items
        for(let line of lines){
            const totalInLine = line.reduce((sum,value) => sum+value,0)

            if(totalInLine < leastItemAmout){
                lineWithLeast = line
                leastItemAmout = totalInLine
            }
        }
        
        if(!lineWithLeast) return;
        // 3.- push the itemsInPersonCart to the line
        setLines(prevLines => prevLines.map(
            line => line === lineWithLeast ? [...line, itemsInPersonCart]: line
        ))
    }

    useEffect(() => {
        const interval = setInterval(() => 
            setLines(previousLines => 
                previousLines.map(line => [line[0]-1, ...line.slice(1)].
                    filter((line) => line > 0)
                )   
            ), 1000);


        return () => {
            clearInterval(interval)
        }
    }, [])


    return (
        <div>
            <form onSubmit={addItemsInPersonCartToLine}>
                <input
                    required
                    type="number"
                    value={itemsInPersonCart} 
                    onChange={(e) => e.target.value === "" ? setItemsInPersonCart(0) : setItemsInPersonCart(e.target.valueAsNumber)} 
                />
                <button disabled={itemsInPersonCart <= 0}>Checkout</button>
            </form>

            <div className="lines">
                {lines.map((line) => 
                    <div key={Math.random()}>
                        {line.map((numberOfItems) => 
                            <div key={Math.random()}>{numberOfItems}</div>
                        )}
                    </div>
                )}
            </div>

        </div>
    )
}