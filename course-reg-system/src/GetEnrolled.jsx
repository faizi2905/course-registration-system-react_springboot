import { useEffect, useState } from "react";
import UseFetch from "./UseFetch"
import Header from "./Header";

function GetEnrolled(){

    const [data, error] = UseFetch("http://localhost:8080/admin/courses/enrolled")

     if (!data) {
        return (
            <>
                {!error && <p style={{ color: "white", fontWeight: "bold" }}>Loading...</p>}
                {error && <p style={{ color: "white", fontWeight: "bold" }}>{error}</p>}
            </>
        );
    }

    return(
        <div>
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email-Id</th>
                    <th>Course Name</th>
                </tr>
            </thead>
            <tbody>
                 {data.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.emailId}</td>
                        <td>{user.courseName}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <Header />
        </div>
    )
    

}
export default GetEnrolled