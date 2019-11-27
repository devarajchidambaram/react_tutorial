import React from 'react'

const {createStore} = Redux;
const initState={
  todo : [],
  posts : []
}

function myreducer( state = initState, action){
 
  
  switch(action){
      
  }
}

const store = createStore(myreducer)


const todoAction = {
  type : "ADD_TODO",
  todo : 'buy milk'
}

store.dispatch(todoAction)