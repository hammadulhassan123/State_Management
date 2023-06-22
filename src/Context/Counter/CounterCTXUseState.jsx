import React from 'react'
import { useState } from 'react'
import { createContext } from 'react';


const CounterContext = createContext(null);

const CounterContextProvider = ({children})=>(
    <CounterContext.Provider value={useState(0)}>
      {children}  
    </CounterContext.Provider>
);

const Container= ({setCounter}) =>(
  <div>
    <AddOneButton setCounter={setCounter}/>
  </div>
)

const AddOneButton= ({setCounter}) =>(
  <div>
      <button onClick={()=> setCounter((v)=>v+1)}>AddOne</button>
  </div>
);

const Counter =({counter})=>(
  <div>Counter: {counter}</div>
);

const [counter,setCounter]=useState(0);
function CounterUseState() {
  return (
    <CounterContextProvider>
      <Container setCounter={setCounter} />
      <Counter counter={counter} />
    </CounterContextProvider>
  )
}

export default CounterUseState