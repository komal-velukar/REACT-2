import { useEffect, useState } from "react";

function UseEffect2() {
    const [counter, setCounter] = useState(0);
    function IncrementCounter() {
        setCounter((previousValue) => previousValue + 1)
    }
    UseEffect2(() => {
        console.log("Hii from Second type")
    }, [])

    return (
        <div>
            <h1>counter : {counter}</h1>
            <button onClick={IncrementCounter}>+</button>
        </div>
    )
}

export default UseEffect2;