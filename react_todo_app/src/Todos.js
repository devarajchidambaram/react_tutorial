import React, {Component} from 'react';

const Todos = (props)=>{


    let todoList =  props.todos.map((todo)=>{
       return( <div className="collection-item"  key={todo.id}>
            <span onClick={()=>{props.deleteTodo(todo.id)}}>{todo.content}</span>
        </div>
       )
    })

    if(todoList.length <= 0) {
        todoList = ( <p className='center'>Todo list is empty</p>)
    } 

    return ( 
    <div className="todos collection"> 
         {todoList}
    </div>
    )
}

export default Todos;