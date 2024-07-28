import React, { useState } from 'react';
import './Counter.css'

const Counter = () => {
    const [count,setCount]=useState(0);
    const [value,setValue]=useState(1);
  return (
    <div className='counter-container'>
      <div className='counter-title'>{count}</div>
      <div className='buttons'>
        <button onClick={()=>{setCount(count+value)}}>+</button>
        <button onClick={()=>{setCount(count-value)}}>-</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
      </div>
      <div className='custom'>
        <input type="text"value={value} onChange={(e)=>{
            setValue(Number(e.target.value))
            
        }}/>
      </div>
    </div>
  );
}
export default Counter;
