import React from 'react';
import axios from "axios"
import { useEffect, useState } from "react"

interface Post{
    userId: string,
    id: string,
    title: string,
    body:string
}
function PostList() {
    const [posts,setPosts]=useState<Post[]>([])
    useEffect(()=>{
        axios.get("http://localhost:4000/posts").then(res=>{
            setPosts(res.data)
        }).catch(err=>console.log(err))
    },[])
  return (
    <div>
        <h1>PostList</h1>
        <p>{posts.length}</p>
        <div>{posts.map(item=>{
            return <p data-testid={item.title} key={item.id}>{item.title}</p>
        })}</div>
    </div>
  )
}
export default PostList