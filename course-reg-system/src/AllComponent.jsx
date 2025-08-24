import List from "./List";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
function AllComponent (){  
    
    const navigate = useNavigate();

/*    const handleLogout = async () => {
    try {
      // ✅ Call backend logout API
      const response = await fetch("http://localhost:8080/logout", {
        method: "POST",   // Spring Security expects POST by default
        credentials: "include", // important if you’re using JSESSIONID cookie
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        // ✅ Clear local storage after successful logout
        localStorage.removeItem("role");
        localStorage.removeItem("token");

        // ✅ Redirect to login page
        navigate("/login");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
*/
    return(
        <div>
            <h1>HOME PAGE</h1>
      
      {/* Calling the List component multiple times with different props */}
      <List name="Available Courses" button="View Courses" onClick={()=>navigate('/courses')}></List>
      <List name="Register" button="Register an Course" onClick={()=>navigate('/register')}/>
      <List name="Enrolled Students" button="View Enrolled" onClick={()=>navigate('/enrolled')}/>
       <List name="Add User" button="View Enrolled" onClick={()=>navigate('/add')}/> 
      <Header />

        </div>
    )
}
export default AllComponent
