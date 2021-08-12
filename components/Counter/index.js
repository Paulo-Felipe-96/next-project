import { useState } from "react"

export default function Counter() {

    const [ count, setCount ] = useState(0)

    function onIncrement() {
        setCount(count+1)
    }

    function onDecrement() {
        setCount(count-1)
    }

    return <div><h1>Contador</h1><button onClick={ onDecrement }>-</button><div>{count}</div><button onClick={ onIncrement }>+</button></div>
}