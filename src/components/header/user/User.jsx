import React from "react";
import { useParams } from "react-router";
export default function User(){
    const {userId} = useParams()
    return(
        <div className="bg-amber-950 text-amber-50 mt-10 mb-50 py-2 px-3">UserID: {userId}</div>
    )
}