
import './App.css';
import React,{ useState} from "react";

const App=()=> {

  const[counter,setCounter]=useState(0);
  
  return(
    <div className="App">
      
      <h1 className="header">{counter}</h1>
      <div className="button">
        <button className="btn1"  onClick={()=> (setCounter(counter+1))}>Increase</button>
        <button className="btn2" onClick={()=> (setCounter(0))}>Reset</button>
        <button className="btn3" onClick={()=> (setCounter(counter-1))}>Decrease</button>
      </div>
   </div>

  )
}

export default App;

