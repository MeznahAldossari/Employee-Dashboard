import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import employees from '../employees/employeeInfo'
import Errorpage from './Errorpage';


function Profile() {
  let { id } = useParams();
  const [name, setName] = useState("")

  useEffect(()=>{
    getName()
  },[])

  const getName = ()=>{
    let findUser = employees.find(user=> user.id === id)
    findUser? setName(findUser.name): setName("") 
   
  }

  return (
    <main className='flex justify-center lg:py-12 py-12 '>
      {name && name !==""? <p className='text-[1.2em] text-secondary-purple font-bold flex-wrap'>Welcome {name}</p> : <Errorpage/>}
        
    </main>
  )
}

export default Profile
