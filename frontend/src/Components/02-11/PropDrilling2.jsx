function PropsDrilling2({ counter, IncrementCounter }) {
    return (
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={IncrementCounter}>+</button>
        </div>
    )
}

export default PropsDrilling2;