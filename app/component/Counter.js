"use client"
import { useState } from "react"

function Counter({user}) {
    const[count,setCount] = useState(0)
    function handleClickCount(){
        setCount((c)=> c + 1)
    }
    return (
        <>
        <p>Length User : {user.length}</p> 
        <div>
            <button onClick={ handleClickCount}>Click count {count}</button>
        </div>
        </>
    )
}

export default Counter
