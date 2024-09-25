import React from 'react'
import vector from '../assets/Vector.png'
import Button from './Button'

function Hero() {
  return (
    <>
      <main className='bg-primary  lg:justify-center lg:px-[50px] lg:flex lg:flex-col lg:items-center w-full lg:h-[68vh]'>
        <div className='bg-secondary  absolute lg:top-[-36%] blur-3xl rounded-full lg:w-[32vw] lg:h-[40vh]'>
        </div>
        
         <section className='w-full z-0 relative'>

            <div className='bg-cover w-full lg:px-[33px] flex flex-col justify-center items-start'  style={{backgroundImage:`url(${vector})`, backgroundRepeat:"no-repeat", width:"30vw", height:"62vh"}}>
            </div>

         </section>
        
        <section className=' absolute flex flex-col justify-between  lg:py-4 lg:max-w-[87vw] z-40 w-full'>
            <span className='flex gap-3'>
                <Button btnDetails = {{nameText:"In Progress", btnColor:"bg-progress"}}/>
                <Button btnDetails = {{nameText:"Internal file", btnColor:"bg-internal"}}/>

            </span>
            
            <h1 className='text-green py-1 leading-[16vh] font-bold text-[4.5em]'>
                 Employee<span className='align-super'>&#44;</span>s <br></br>Dashboard</h1>
        
            <p className='text-white  font-sans tracking-wide'>Contains all designs for the employee dashboard Contains all designs.</p>
            
            
        </section>

      </main>
      
    </>
  )
}

export default Hero
