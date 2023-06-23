import React from 'react'
import { useReducer } from 'react'
import { createContext, useContext} from 'react';

const reducer =(state,action)=>{
  switch(action.type){
    case "add":
        return state + 1;
    // case"sub":
    //     return state - 1;
    default:
        return state;
  }
}; 

const CounterContext = createContext(null);

const CounterContextProvider = ({children})=>(
    <CounterContext.Provider value={useReducer(reducer,0)}>
      {children}  
    </CounterContext.Provider>
);

const Container = () =>(
  <div>
    <AddOneButton />
  </div>
)

const AddOneButton= () =>{

    const [, dispatch]= useContext(CounterContext);
    return(
      <div>
          <button onClick={()=> dispatch({
            type: "add"
          })}>AddOne</button>
     </div>
    );
}

const Counter =()=>{
    const[counter]=useContext(CounterContext)
    return (<div>Counter: {counter}</div>);
}

function CounterCTXUseReducer() {
  return (
    <CounterContextProvider>
      <Container/>
      <Counter/>
    </CounterContextProvider>
  )
}

export default CounterCTXUseReducer