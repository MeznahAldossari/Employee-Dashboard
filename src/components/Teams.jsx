import React from 'react'
import { Link } from 'react-router-dom'
import employees from '../employees/employeeInfo'
import tetco from "../assets/tetco.png"


function Teams() {
   
  return (
    
    <article className='py-10 lg:px-[50px] lg:h-[32vh]  w-full relative overflow-y-hidden'>
       
      <section className='lg:flex lg:justify-between lg:items-end lg:px-[33px]  w-full  z-40'>
        <section className='flex flex-col'>
          <h1 className='font-sans font-medium text-gray'>TEAM</h1>
              {employees?.map((member, index)=>(
                  <Link to={`/profile/${member.id}`} key={index} className='underline  decoration-transparent '>
                   <p  className='font-sans bg-clip-text text-transparent bg-gradient-to-r from-[#533979] to-[#8966c5]'>{member.name}</p> 
                    </Link>
              ))}

        </section>
            

            <p className='bg-secondary-purple flex items-center px-6  lg:w-[12vw] lg:h-[5vh] rounded-sm'>
              <img src={tetco} className='lg:h-[2.vh] lg:w-[100vw] '></img>
            </p>

      </section>
        <section className='w-full flex justify-end lg:px-[33px] bg-slate-500 z-0'>
                <div className='rounded-full  bg-purple blur-3xl lg:w-[26vw] lg:h-[18vh] z-0 absolute top-[70%]'> </div>

        </section>
      
     
    </article>
      
    
  )
}

export default Teams
