import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";

type Todo={
        userId: number,
        id: number,
        title: string,
        completed: boolean
}

function TodoList() {
    const [todos,setTodos]=useState<Todo[]>([]);
    const [count,setCount]=useState(0);
    useEffect(()=>{
        async function fetchTodos(){
            try {
                const {data}=await axios.get("https://jsonplaceholder.typicode.com/todos");
                console.log(data)
                setTodos(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchTodos();

    },[]);
    const decreaseHandler=()=>{
        setCount(prev=>prev-1)
    };
    const increaseHandler=()=>{
        setCount(prev=>prev+1)
    };
  return (
    <div>
        <div>count: {todos.length}</div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <button onClick={decreaseHandler}>-</button>
            <p>{count}</p>
            <button onClick={increaseHandler}>+</button>
        </div>
        <p>{todos.length}</p>
       {todos.length>0&&todos.map((item)=>{
        return <div style={{backgroundColor:"blue"}}>
            <p>{item.title}</p>
            <p>{item.completed?"Done":"Todo"}</p>
            </div>
       })}
    </div>
  )
}

export default TodoList;