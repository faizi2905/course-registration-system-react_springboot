import { useState, useEffect } from "react"
const UseFetch = (url) => {

    const [data, setData] = useState("")
    const [error, setError] = useState("")
    useEffect(()=>{
            fetch(url, {
      method: "GET",
      credentials: "include", // 👈 important for session cookie login
      headers: {
        "Content-Type": "application/json",
        // If you're using httpBasic instead of session cookie:
        // "Authorization": "Basic " + btoa("admin:password"),
      },
    })

            .then(Response=>{
                if(!Response.ok){
                    throw Error("Couldn't Retrieve Data")
                }
                return Response.json()
            })
            .then(data=> setData(data))
            .catch((error)=>{
                setError(error.message)
            })
        },[])
        return [data, error]
}
export default UseFetch