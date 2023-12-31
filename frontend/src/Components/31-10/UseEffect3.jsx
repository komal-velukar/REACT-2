import { useEffect, useState } from "react";

function UseEffect3() {
    const [Hello, setHii
    ] = useState("Bye")
    console.log(Hello) 
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(10);
    function IncrementCounter() {
        setCounter((prevValue) => prevValue + 1)
    }
    function IncremnetCounter2() {
        setCounter2((prevValue) => prevValue + 1)
    }

    UseEffect3(() => {
        console.log("xxxxxxxxx")
    }, [counter])

    UseEffect3(() => {
        console.log("effect counter 2")
    }, [counter2])
    return (
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={IncrementCounter}>+</button>
            <h1>Counter 2 : {counter2} </h1>
            <button onClick={IncremnetCounter2}>+</button>
        </div>
    )
}

export default UseEffect3;