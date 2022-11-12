import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

export default function Receipt(){
    let [llNo, setLlNo] = useState("");
    let location = useLocation();

     useEffect(()=>{
        setLlNo(location.state.learningno)
     }, [])

    return (

        <>
            <div className="container">
                <p>Your Learning License No: {llNo}</p>
            </div>
        </>
    )
}