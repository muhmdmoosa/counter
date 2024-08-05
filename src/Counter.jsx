import React, { useState } from 'react'

function Counter() {

const [Counter, setCounter]= useState(0)


function Increment(){
  setCounter(Counter+1)
}

function Decrement(){
if(!Counter==0){
  setCounter(Counter-1)
}
}

function Reset(){
  setCounter(0)
}
 

  return (
    <>
      <div>
        <h1 className='text-center text-primary'>Counter App</h1>
        <h2 className='text-center'>{Counter}</h2>
      </div>

      <div className='text-center'>
      <button className='btn btn-success m-3' onClick={Increment} >Increment</button>
      <button className='btn btn-danger m-3' onClick={Reset} >Reset</button>
      <button className='btn btn-warning m-3' onClick={Decrement} >Decrement</button>


      </div>
    </>
  )
}

export default Counter
