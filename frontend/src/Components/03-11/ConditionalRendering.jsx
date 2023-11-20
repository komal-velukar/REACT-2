import { useState } from "react";

function ConditionalRendering() {

    const [isUserSignIn, setIsUserSignIn] = useState(false);
    console.log(isUserSignIn, "isUserSignIn")

    function SignIn() {
        setIsUserSignIn((prevValue) => !prevValue)
    }

    const [myAge, setMyAge] = useState(20)

    return (
        <div>
            {isUserSignIn ? <button onClick={SignIn}>Sign-Out?</button> : <button onClick={SignIn}>Sign-In?</button>}
            
        </div>
    )
}

export default ConditionalRendering;