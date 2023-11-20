import { useState } from "react";
import './Register1.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Register1() {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" })
    const router=useNavigate();
     console.log(userData, "userData state")

    function handleChange(event) {
          // console.log(event.target.value, "- value", event.target.name, "- name")
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    async function Submit(event) {
        event.preventDefault();
        if (userData.name && userData.email && userData.password) {
            try {
                // const response = await axios.post('http://localhost:8000/register', { userData })
                const response = { data: { success: true, message: "Registration completed." } }
                if (response.data.success) { 
                    alert(response.data.message)
                    setUserData({ name: "", email: "", password: "" })
                    router('/login')
                }
            } catch (error) {
                alert(error.response.data.message)
            }

        } else {
            alert("Please fill i all fields.")
        }
    }
    return (
        <div>
            <h1>Registration</h1>
            <form id='myForm' onSubmit={Submit}>
                <label className="label">Name </label><br />
                <input className="input" type="text" required onChange={handleChange} name='name' /><br />
                <label className="label">Email</label><br />
                <input className="input" type="email" required onChange={handleChange} name='email' /><br />
                <label className="label">Password</label><br />
                <input className="input" type="password" required onChange={handleChange} name='password' /><br />
                <input className="submit" type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register1;