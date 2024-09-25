import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import employees from '../employees/employeeInfo'


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
    <div>
        <p>{name}</p>
    </div>
  )
}

export default Profile
