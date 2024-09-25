import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import employees from '../employees/employeeInfo'
import Errorpage from './Errorpage';
import email from '../assets/email.png'


function Profile() {
  let { id } = useParams();
  const [userInfo, setUserInfo] = useState({})

  useEffect(()=>{
    getName()
  },[])

  const getName = ()=>{
    let findUser = employees.find(user=> user.id === id)
    findUser? setUserInfo({name: findUser.name, email:findUser.email}): setUserInfo({}) 
   
  }

  return (
    <main className='flex justify-center lg:py-12 py-12 '>
      {userInfo.name && userInfo.email ? 
      (
      <section className='flex flex-col gap-y-6 items-center'>
             <p className='text-[1.2em] text-secondary-purple text-center font-bold flex-wrap'>{userInfo.name}</p>
             <p className='flex justify-center gap-4 items-center'>Connect via: <a href={`mailto:${userInfo.email}`}><img src={email} className='w-6 cursor-pointer'></img></a> </p>

      </section>
    )
      : <Errorpage/>}
        
    </main>
  )
}

export default Profile
