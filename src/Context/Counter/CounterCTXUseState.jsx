import React from 'react'
import { useState } from 'react'
import { createContext, useContext} from 'react';


const CounterContext = createContext(null);

const CounterContextProvider = ({children})=>(
    <CounterContext.Provider value={useState(0)}>
      {children}  
    </CounterContext.Provider>
);

const Container = () =>(
  <div>
    <AddOneButton />
  </div>
)

const AddOneButton= () =>{

    const [, setCounter]= useContext(CounterContext);
    return(
      <div>
          <button onClick={()=> setCounter((v)=>v+1)}>AddOne</button>
     </div>
    );
}

const Counter =()=>{
    const[counter]=useContext(CounterContext)
    return (<div>Counter: {counter}</div>);
}

function CounterCTXUseState() {
  return (
    <CounterContextProvider>
      <Container/>
      <Counter/>
    </CounterContextProvider>
  )
}

export default CounterCTXUseState