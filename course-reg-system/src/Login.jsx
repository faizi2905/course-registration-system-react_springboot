import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate()

    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")


    function handleUsernameChange(event){
        setUsername(event.target.value)
        console.log(event.target.value)
        
    }
    
    function handlePasswordChange(event){
        setPassword(event.target.value)
        console.log(event.target.value)
        
    }

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username: username,
          password: password,
        }),
        credentials: "include", // ✅ important: stores JSESSIONID cookie
      })
       
      if (!response.ok) {
      if (response.status === 403) {
        alert("Forbidden – only admin can access this");
      } else if (response.status === 401) {
        alert("Unauthorized – please login first");
      }
      return;
    }

    const data = await response.json();
    console.log("✅ Login response:", data);

    if (data.role === "ROLE_ADMIN") {
  localStorage.setItem("role", "ROLE_ADMIN");
  navigate("/allComponent");
} else if (data.role === "ROLE_USER") {
  localStorage.setItem("role", "ROLE_USER");
  navigate("/allComponent");
} else {
  navigate("/allComponent"); // fallback
}

    }
     catch(error){

     }  
    } 
    return(

      <div style={{ padding: "5px" }}>
    <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
      Welcome to Login Page
    </h1>
        
        <div style={{backgroundColor:"gray", width:"500px", height:"210px",margin:"100px auto", borderRadius:"10px"}}>
        <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "50px auto", display: "flex", flexDirection: "column", padding:"15px" }}>
            <label style={{marginBottom:"5px"}}>Username:</label>
            <input value={username} onChange={handleUsernameChange} type="text" style={{padding:"5px",marginBottom:"15px"}}></input>

            <label style={{marginBottom:"5px"}}>Password:</label>
            <input value={password} onChange={handlePasswordChange} type="password" style={{padding:"5px",marginBottom:"30px"}}/>

            <button type="submit" style={{width:"50px", margin:"auto"}}>Login</button>
        </form>
        </div>
      </div>  
    )
}

export default Login