import { useState } from "react";

function ConditionalRendering2() {
    const [isUserSignIn, setIsUserSignIn] = useState(true)
    return (
        <div>
            {isUserSignIn && <h1>User is Signed in.</h1>}
        </div>
    )
}

export default ConditionalRendering2;