import React from 'react'
import { useRouteError } from "react-router-dom";
import errorIcon from '../assets/errorPage.png'


function Errorpage() {
    const error = useRouteError();
  
  
    return (
      <div id="error-page">
        <section className='flex h-screen  justify-center items-center lg:gap-y-4 gap-y-4 flex-col px-4'>
            <img src={errorIcon} className='lg:w-[30vw] lg:h-[40vh] w[20vw] h-[30vh]'></img>
            <h1 className='text-[1.2em] font-medium text-secondary-purple ' >Oops!</h1>
            <p className='text-[1.2em] font-medium text-secondary-purple '>Sorry, an unexpected error has occurred.</p>

        </section>
       
      
      </div>
  )
}

export default Errorpage
