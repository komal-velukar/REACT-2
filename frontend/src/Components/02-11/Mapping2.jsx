import { useState } from "react";

function Mapping2() {
    const [studentsData, setStudentsData] = useState([{ name: "Divya Mawale", age: 45, role: "H.O.D" }, { name: "Ayan Malik", age: 30, role: "Assitant Proffesor" }, { name: "Saurabh Deshmukh", age: 40, role: "Lab Assistant" }])
    console.log(studentsData, "studentsData")
    return (
        <div>
            <h1>Department Staff List</h1>
            {studentsData.map((i) => (
                <div>
                    <h1>Name : {i.name}</h1>
                    <h2>Age : {i.age}</h2>
                    <h2>Role : {i.role}</h2>
                </div>
            ))}
        </div>
    )
}

export default Mapping2