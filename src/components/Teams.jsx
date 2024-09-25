import React from 'react'
import { Link } from 'react-router-dom'
import employees from '../employees/employeeInfo'
import tetco from "../assets/tetco.png"


function Teams() {
   
  return (
    
    <article className='py-10 max-sm:min-h-[50vh] max-md:justify-center max-sm:justify-start  max-md:flex  flex-grow max-sm:overflow-y-hidden max-sm:overflow-x-hidden md:px-[2.2rem] lg:px-[3rem] max-sm:flex max-sm:flex-col  lg:h-[32vh]  w-full relative overflow-y-hidden'>
       
      <section className='lg:flex  h-fit lg:py-0 max-md:w-[90vw] flex justify-between items-end  max-sm:flex max-sm:w-full max-sm:flex-col max-sm:gap-y-4  lg:justify-between  lg:items-end lg:px-[33px]  w-full  z-40'>
        <section className='flex flex-col max-sm:gap-y-1 max-sm:w-full  max-sm:px-[1.3rem]'>
          <h1 className='font-sans font-medium text-[0.78em] text-gray'>TEAM</h1>
              {employees?.map((member, index)=>(
                  <Link to={`/profile/${member.id}`} key={index} className='relative w-fit'>
                   <p  className='font-sans underline w-fit bg-clip-text text-transparent bg-gradient-to-r from-[#533979] to-[#8966c5]'>{member.name}</p> 
                   <span className="absolute inset-x-0 bottom-[-2px]  h-[0.9px] max-md:h-[0.9px] bg-gradient-to-r from-[#533979] to-[#8966c5]"></span>
                  </Link>
              ))}

        </section>
            
        <section className='max-sm:px-[1.3rem] px-[3rem] lg:px-[0] max-sm:w-full'>
              <p className='bg-secondary-purple flex items-center w-[20vw] h-[3vh] max-sm:px-5 lg:px-6 px-6 max-sm:w-[22vw] max-sm:h-[3vh]  lg:w-[12vw] lg:h-[5vh] rounded-sm'>
                <img src={tetco} className='lg:h-[2.vh] min-h-[0.8vh]  bg-cover max-sm:min-h-[0.8vh] w-[100vw] lg:w-[100vw] '></img>
              </p>

        </section>
              

        </section>
          <section className='lg:w-full md:w-full max-sm:h-fit  flex justify-end lg:px-[33px]  z-0'>
                  <div className='rounded-full  bg-purple blur-3xl   max-sm:backdrop-blur-2xl max-sm:w-[50vw] max-sm:h-[15vh] max-sm:left-[50%] max-sm:top-[51%] w-[26vw] h-[22vh] lg:w-[26vw] lg:h-[18vh] z-0 absolute top-[60%] lg:top-[70%]'> </div>

          </section>
      
     
    </article>
      
    
  )
}

export default Teams
