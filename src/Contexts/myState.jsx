import { useState } from "react";
import MyContext from "./myContext";
import { Timestamp } from "firebase/firestore";


export default function MyState(props){
    const [mode,setMode] = useState("dark");
    const toggleMode = ()=>{
        if(mode=="dark"){
            setMode("light");
            document.body.backgroundColor = "rgb(17,24,39)";
        }
        else{
            setMode("dark");
            document.body.backgroundColor = "white";
        }
    }
    const [loading,setLoading] = useState(false);
    const [products,setproducts] = useState({
        title:null,
        price:null,
        imageURL:null,
        category:null,
        description:null,
        time:Timestamp.now(),
        date:new Date().toLocaleString("en-US",
        {
            month:"short",
            day:"2-digit",
            year:"numeric",
        })
    })

    const addproduct = async()=>{
        
    }

    return (
        <MyContext.Provider value = {{mode,toggleMode,loading,setLoading}}>
        {props.children}
        </MyContext.Provider>
    )   

}