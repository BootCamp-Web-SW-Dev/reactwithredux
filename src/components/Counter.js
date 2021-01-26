import {React, useState} from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);
    const [value,setValue] = useState(0);
    return(
        <div>
            <div>Counter: {counter}</div>
            <div>
                <button onClick={()=>{
                      setCounter(counter+1);
                }}>
                    Increment
                </button>
                <button onClick = {()=> {
                    setCounter(counter-1);
                }}>
                  Decrement
                </button>
            </div>
            <div>
                <input type="text" onChange={(e) => {
                     setValue(e.target.value)
                }} />
                <br/>
                <button onClick={()=>{
                    setCounter(counter+Number(value));
                }} > Increment by Value </button> 
            </div>
        </div>

    )


}

export default Counter;
