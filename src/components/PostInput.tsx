import React from 'react';
import axios from "axios"
import { useState } from "react"

interface FormValue{
    title:string,
    body:string,
    userId:number,
}
interface PostResponse{
    id:string,
    title:string,
    body:string,
    userId:number,
}

function PostInput() {
    const [formVal,setFormVal]=useState<FormValue>({title:"",body:"",userId:0});
    const [resData,setResData]=useState<null|PostResponse>(null)
    const changeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
setFormVal({...formVal,[e.target.name]:e.target.value})
    }
    const submitHandler=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        axios.post("http://localhost:4000/posts",{...formVal,
        userId:Number(formVal.userId),id:(new Date().getTime()).toString()}).then((res)=>setResData(res.data)).catch((err)=>console.log(err))
        console.log(formVal)
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
           <div>
           <label htmlFor="title">title</label>
            <input type="text" name="title" value={formVal.title} onChange={changeHandler} id="title" />
           </div>
            <div>
            <label htmlFor="body">body</label>
            <input type="text" name="body" value={formVal.body} onChange={changeHandler} id="body" />
            </div>
            <div>
            <label htmlFor="userId">userId</label>
            <input type="number" name="userId" value={formVal.userId} onChange={changeHandler} id="userId" />
            </div>
            <input type="submit"  value="Add" />
        </form>
    </div>
  )
}
export default PostInput