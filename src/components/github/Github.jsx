import React from "react";
import { useEffect, useState } from "react";
import { data } from "react-router";
import { useLoaderData } from "react-router";
export default function github(){
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary').then(res => res.json()).then
    //     (data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
    return(
        <div className=" bg-amber-950 text-amber-50 mt-10 mb-50 py-3 px-3">Github Followers: {data.followers}
        <img className="mt-3 ml-3" src={data.avatar_url} alt="Github image" width={200}/>
        </div>
    )
}

export const gitInfo = ( async() => {
    const data = await fetch('https://api.github.com/users/hiteshchoudhary');
    return data.json();
})