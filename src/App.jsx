import React, { useState } from 'react';

const App = () => {
    let time = new Date().toLocaleTimeString();

    //React Hooks
    const[ctime,setCTime] = useState(time);

    const UpdateTime = ()=>{
        time = new Date().toLocaleTimeString();
        setCTime(time);
    }
    setInterval(UpdateTime, 1000);

   
    return (
        <>
            <h1>{ctime}</h1>
        </>
    );
}
export default App;