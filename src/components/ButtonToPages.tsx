//import React, { useState } from "react";
//import { Button } from "react-bootstrap";

import React from "react";


// 3 functions are components because they return JSX components

export function ButtonToPages(): JSX.Element {
    //const [counter, setCounter] = useState<number>(0);
  
    /*
    function addOne(): void {
      setCounter(counter+1);
    }
    */
    
    return (
      <div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Easy Questions
        </a>
      </div>
    );
  }  
    
    
    
    //<Button onClick={addOne}>Click to add 1 to: {counter}</Button>;

  