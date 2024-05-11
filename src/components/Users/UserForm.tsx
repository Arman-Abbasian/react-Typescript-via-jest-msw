import React from 'react';
import { useState } from "react"

export interface FormValue{
    name:string,
    lastName:string,
    age:number,
}
type UserInputProps={
    sendData:(formData:FormValue)=>void
}

function UserForm(props:UserInputProps) {
    const {sendData}=props
    const [formVal,setFormVal]=useState<FormValue>({name:"",lastName:"",age:20});
    const changeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setFormVal({...formVal,[e.target.name]:e.target.value})
    };
    const submitHandler=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        sendData(formVal)
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
           <div>
           <label htmlFor="name">name</label>
            <input type="text" name="name" value={formVal.name} onChange={changeHandler} id="name" />
           </div>
            <div>
            <label htmlFor="lastName">lastName</label>
            <input type="text" name="lastName" value={formVal.lastName} onChange={changeHandler} id="lastName" />
            </div>
            <div>
            <label htmlFor="age">age</label>
            <input type="number" name="age" value={formVal.age} onChange={changeHandler} id="age" />
            </div>
            <input type="submit"  value="Add" />
        </form>
    </div>
  )
}
export default UserForm;