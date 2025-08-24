import { useState } from "react"
import Header from "./Header";

function Register(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [course, setCourse] = useState("")
    

    function handleNameChange(event){
        setName(event.target.value)
        console.log(event.target.value)
    }

    function handleEmailChange(event){
        setEmail(event.target.value)
        console.log(event.target.value)
    }

    function handleCourseChange(event){
        setCourse(event.target.value)
        console.log(event.target.value)
    }

    async function handleSubmit(event) {
    event.preventDefault(); // prevent page reload

    try {
        const url = `http://localhost:8080/admin/courses/register?name=${encodeURIComponent(name)}&emailId=${encodeURIComponent(email)}&courseName=${encodeURIComponent(course)}`;

        const response = await fetch(url, {
            method: "POST",
            credentials: "include",  // 🔑 important for Spring Security
      headers: {
         //"Authorization": "Basic " + localStorage.getItem("auth")
      }
        });

        if (!response.ok) {
            throw new Error("Failed to register");
        }

        // Try JSON first, fallback to text if empty
        const text = await response.text();
        //const result = text ? JSON.parse(text) : null;     

                                                        /* "{"id":1,"name":"Faiz"}" → if backend returned JSON as a string
                                                        "Congratulations Faiz..." → if backend returned plain text
                                                        "" (empty string) → if backend returned nothing*/

        console.log("Registration successful:", text);
        alert("Registration successful!");
    } catch (error) {
        console.error("Error:", error.message);
        alert("Registration failed: " + error.message);
    }
}
    return(
         <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "50px auto", display: "flex", flexDirection: "column" }}>
            
            <label style={{ marginBottom: "5px" }}>Enter your name:</label>
            <input type="text" onChange={handleNameChange} name="name" style={{ padding: "8px", marginBottom: "15px" }} />

            <label style={{ marginBottom: "5px" }}>Enter your email:</label>
            <input type="email" onChange={handleEmailChange} name="emailId" style={{ padding: "8px", marginBottom: "15px" }} />

            <label style={{ marginBottom: "5px" }}>Enter Course Name:</label>
            <select onChange={handleCourseChange} style={{ padding: "8px", marginBottom:"25px" }}>
                <option ></option>
                <option >Java</option>
                <option value="Python">Python</option>
                <option value="Html,Css & JavaScript">Html, CSS & JavaScript</option>
            </select>

            <button type="submit" style={{width:'60px', margin:'auto'}}>Submit</button>

            <Header />
        </form>
    )
}
export default Register