import { useEffect, useState } from "react";

function UseEffect() {

    const [counter, setCounter] = useState(0);

    function incrementCounter() {
        setCounter((prevValue) => prevValue + 1)
    }

    UseEffect(() => {
        console.log("Hii from use effect hook")
    })
    return (
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={incrementCounter}>+</button>
        </div>
    )
}


export default UseEffect;