import { useState } from "react";
import MyContext from "./myContext";


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
    return (
        <MyContext.Provider value = {{mode,toggleMode}}>
        {props.children}
        </MyContext.Provider>
    )   

}