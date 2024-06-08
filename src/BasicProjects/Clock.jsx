import React, { useState } from 'react'

const Clock = () => {
    let time=new Date().toLocaleTimeString();
    const [ctime,setCtime]=useState(time);

    const UpdateTime=()=>{
     time=new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(UpdateTime,(1000));
  return (
    <div className='flex justify-center items-center h-screen'>
    
    <h1 className='font-bold'>{ctime}</h1>
    
    </div>
  )
}

export default Clock