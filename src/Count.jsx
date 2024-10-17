import { useState } from "react";

export default function Count () {

    const [count, setCount] = useState(0);


    const countStyle = {
        border:'2px solid black',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'
    }

    const handleCount =() => {
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleCountReduce =() => {
        const newCount = count - 1;
        setCount(newCount)
    }
    return(
        <div style={countStyle}>
            <h3>Count: {count} </h3>
            <button onClick={handleCount}>Add</button>
            <button onClick={handleCountReduce}>Reduce</button>
        </div>
    )
}