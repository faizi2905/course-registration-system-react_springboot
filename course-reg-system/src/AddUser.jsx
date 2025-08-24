import { useState } from "react";

function AddUser(){

    const[id, setId]=useState("");
    const[username, setUsername]=useState("");
    const[password, setPassword]=useState("");
    const[role, setRole]=useState(""); 

    function handleIdChange(event){
        setId(event.target.value)
        //console.log(event.target.value)
    }

    function handleNameChange(event){
        setUsername(event.target.value)
        //console.log(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
        //console.log(event.target.value)
    }

    function handleRoleChange(event){
        setRole(event.target.value)
        //console.log(event.target.value)
    }

    async function handleSubmit(event) {
    event.preventDefault();

    if (!id || !username || !password || !role) {
        alert("Please fill all fields!");
        return;
    }

    try{
        const url ='http://localhost:8080/admin/add';

        const response = await fetch(url, {
            method:'POST',
            credentials:'include',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id,
                username: username,
                password: password,
                role: role
            })
        });

        const text = await response.text();

        if(!response.ok){
            //const errorText = await response.text();
            alert("Failed to register: " + text);
            return;
        }else {
            alert(text); // success message
        }

    } catch(error){
        alert('Registration Failed: '+ error.message)
    }
}


    return(
       <form onSubmit={handleSubmit} className="user-form">
       <h2>Add a user</h2>

  <div className="form-group">
    <label>Id</label>
    <input type="number" name="Id" onChange={handleIdChange}/>
  </div>

  <div className="form-group">
    <label>Username</label>
    <input type="text" name="username" onChange={handleNameChange} />
  </div>

  <div className="form-group">
    <label>Password</label>
    <input type="text" name="password" onChange={handlePasswordChange}/>
  </div>

  <div className="form-group">
    <label>Role</label>
    <select name="role" onChange={handleRoleChange}>
      <option> </option>
      <option>ADMIN</option>
      <option>USER</option>
    </select>
  </div>

   <button type="submit">Submit</button>
  
</form>

    )
}
export default AddUser;