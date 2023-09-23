import { useRef } from "react";

const Focus = () => {
    
    const refs = {
        "0":useRef(),
        "1":useRef(),
        "2":useRef(),
        "3":useRef(),
    }


    const focusHandler =(id)=>{
        refs[id].current.focus();
    }
    return (
        <div>
            <input onChange={()=>{focusHandler(1)}} ref={refs["0"]} type="text"/>
            <input onChange={()=>{focusHandler(2)}} ref={refs["1"]} type="text"/>
            <input onChange={()=>{focusHandler(3)}} ref={refs["2"]} type="text"/>
            <input onChange={()=>{focusHandler(0)}} ref={refs["3"]} type="text"/>
        </div>
    );
}

export default Focus;
