import { useState } from "react";

function Mapping() {
    const [students, setStudents] = useState(["Diyvya Mawale", "Ayan Malik", "Saurabh Deshmukh", "Surya"])
    return (
        <div>
            {students.map((i) => (
                <div>
                    <h1>{i}</h1>
                </div>
            ))}

            {students.map((i) => (
                <h2>{i}</h2>
            ))}
        </div>
    )
}

export default Mapping;