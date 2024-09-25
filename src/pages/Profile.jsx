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
    <>
      {name && name !==""? <p>{name}</p> : <Errorpage/>}
        
    </>
  )
}

export default Profile
