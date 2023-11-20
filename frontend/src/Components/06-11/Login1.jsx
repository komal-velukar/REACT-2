import { useState } from "react";
import './Login1.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Login1() {
    const [userData, setUserData] = useState({Username: "", password: "" })
    const router=useNavigate();
     console.log(userData, "userData state")

    function handleChange(event) {
          // console.log(event.target.value, "- value", event.target.name, "- name")
        setUserData({ ...userData, [event.target.Username]: event.target.value })
    }

    async function Submit(event) {
        event.preventDefault();
        if (userData.Username &&  userData.password) {
            try {
                // const response = await axios.post('http://localhost:8000/register', { userData })
                const response = { data: { success: true, message: "User Logged In" } }
                if (response.data.success) { 
                    alert(response.data.message)
                    setUserData({ Username: "",  password: "" })
                    router('/login')
                }
            } catch (error) {
                alert(error.response.data.message)
            }

        } else {
            alert("Please fill i all fields.")
        }
        return{
        
        }
        <div>
        <div className='login'>
            <Login1 id='myLogin' onSubmit={Submit}>
                <h1>Login</h1>
                <label>UserName</label></br>
                <input className="input" value={userData.userName} type="text"required onChange={handleChange}/></br>
                <label>Password</label></br>
                <input className="input" value={userData.password} type="Password"required onChange={handleChange}/></br>
                <input className="submit" value={userData.userName} type="submit" type="submit" value="signin"/>
</Login>
</div>
</div>
      
}

export default Login1;