import { useContext } from "react";
import React from "react";
const TodoContext=React.createContext({
    todos:[{
        id:1,
        todo:"msg",
        completed:false
    }],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const TodoProvider=TodoContext.Provider;
export const useTodo=()=>{
    return useContext(TodoContext);
}