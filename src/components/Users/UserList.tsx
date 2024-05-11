import React from 'react';
import { useState } from 'react'
import UserForm, { FormValue } from './UserForm'

type FormData={
id:string,
}&FormValue

function UserList() {
    const [users,setUsers]=useState<FormData[]>([])
    const addUser=(formData:FormValue)=>{
        setUsers([...users,{...formData,id:"10"}])
    }
  return (
    <div>
      <h1>number of users {users.length}</h1>
        <UserForm sendData={addUser} />
    </div>
  )
};

export default UserList