import { useState } from "react";

function UseState() {
    const [counter, setCounter] = useState(0)
    console.log(counter, "- counter")

    function Increment() {
        setCounter((previousValue) => previousValue + 1)
    }

    function Decrement() {
        setCounter((previousValue) => previousValue - 1)
    }

    return (
        <div>
            <h1>Counter : {counter} </h1>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
        </div>
    )
}

export default UseState;