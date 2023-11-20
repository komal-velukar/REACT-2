import { useState, useEffect } from "react";

function UseEffect4() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(20);

    function ChangeCounter1() {
        setCounter1((prevValue) => prevValue + 1)
    }
    function ChangeCounter2() {
        setCounter2((prevValue) => prevValue + 1)
    }

    useEffect(() => {
        console.log("commenting")
     }, [counter1, counter2])

    return (
        <div>
            <h1>Counter 1 : {counter1}</h1>
            <button onClick={ChangeCounter1}>+  counter 1</button>
            <h1>Counter 2 : {counter2}</h1>
            <button onClick={ChangeCounter2}>+  counter 2</button>
        </div>
    )
}

export default UseEffect4;