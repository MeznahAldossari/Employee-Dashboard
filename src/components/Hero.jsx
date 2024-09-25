import React from 'react'
import vector from '../assets/Vector.png'
import Button from './Button'

function Hero() {
  return (
    <>
      <main className='bg-primary max-sm:h-[45vh] flex justify-center  lg:justify-center px-[50px] lg:px-[50px]  flex-col items-center lg:flex lg:flex-col lg:items-center w-full h-[40vh] lg:h-[68vh]'>
        <div className='bg-secondary top-[-36%] max-sm:top-[-13%] w-[40vw] absolute lg:top-[-36%] blur-3xl rounded-full h-[40vh] lg:w-[32vw] max-sm:h-[18vh] lg:h-[40vh]'>
        </div>
        
         <section className='w-full h-fit  z-0 flex flex-col justify-center relative max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center'>

            <div className='bg-contain lg:bg-cover w-[40vw] h-[30vh] lg:px-[33px] lg:w-[30vw]  lg:h-[62vh] max-sm:h-[35vh] max-sm:object-contain max-sm:w-[95vw]'  style={{backgroundImage:`url(${vector})`, backgroundRepeat:"no-repeat"}}>
            </div>

         </section>
        
        <section className='absolute lg:h-fit py-6 h-[30vh]  max-sm:h-[45vh]  flex flex-col justify-between max-sm:justify-center max-sm:gap-y-6  lg:py-4 max-sm:max-w-[90vw] lg:max-w-[87vw] z-40 w-[90vw]'>
            <span className='flex max-sm:relative relative lg:static gap-3'>
                <Button btnDetails = {{nameText:"In Progress", btnColor:"bg-progress"}}/>
                <Button btnDetails = {{nameText:"Internal file", btnColor:"bg-internal"}}/>

            </span>
            
            <h1 className='text-green py-1 lg:leading-[16vh] leading-[9.4vh] text-[4em] max-sm:leading-[7.5vh] font-bold max-sm:text-[2.5em] lg:text-[4.5em]'>
                 Employee<span className='align-super'>&#44;</span>s <br></br>Dashboard</h1>
        
            <p className='text-white  font-sans tracking-wide'>Contains all designs for the employee dashboard Contains all designs.</p>
            
            
        </section>

      </main>
      
    </>
  )
}

export default Hero
