import React from 'react'
import { useRouteError } from "react-router-dom";


function Errorpage() {
    const error = useRouteError();
  
  
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      
      </div>
  )
}

export default Errorpage
