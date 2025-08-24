import { useEffect, useState } from "react";
import UseFetch from "./UseFetch";
import Header from "./Header";

function GetCouses(){
    const [data,error] = UseFetch("http://localhost:8080/user/courses")
    
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
                    <th>Course Id</th>
                    <th>Course Name</th>
                    <th>Trainer</th>
                    <th>Duration in Weeks</th>
                </tr>
            </thead>
            <tbody>
                 {data.map(user => (
                    <tr key={user.courseId}>
                        <td>{user.courseId}</td>
                        <td>{user.courseName}</td>
                        <td>{user.trainer}</td>
                        <td>{user.durationInWeeks}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <Header />
        </div>
    )
}
export default GetCouses 