import { useState } from "react";

function ConditionalRendering3() {
    const [isUserSignIn, setIsUserSignIn] = useState(false);

    return (
        <div>
            {isUserSignIn || <h1>Eureka.</h1>}
        </div>
    )
}
export default ConditionalRendering3;