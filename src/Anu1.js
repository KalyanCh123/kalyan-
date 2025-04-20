import { useState } from "react";

function Kalyan1(){
    const [anu,setAnu]=useState([])
    useState(()=>{
        fetch('https://dummyjson.com/products')
        .then(res=>res.json())
        .then(data=>setAnu(data.products))
    })
    return(
        <>
        <h1>Hiii Kkkkkkkkkkkk</h1>
        {anu.map((val)=><li>{val.title} and ${val.price}</li>)}
        </>
    )
}
export default Kalyan1;