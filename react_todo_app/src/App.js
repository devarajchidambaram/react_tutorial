import React , {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Todos from './Todos'
import AddTodo from './addTodo'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'
class App extends Component{

  render(){
    return(
      <BrowserRouter>
        <div>
          <NavBar/>
           <Switch>
            <Route exact path='/' component= {Home} />
            <Route path='/about' component= {About} />
            <Route path='/contact' component= {Contact} />
            <Route path='/posts/:post_id' component= {Post} />
            </Switch>
        </div>
      </BrowserRouter>

    )
  }



  // state = {   
  //   todos : [
  //     {
  //       id : 1,
  //       content : 'buy pencil'
  //     },
  //     {
  //       id : 2,
  //       content : 'book ticket'
  //     }
  //   ]
  // }


  // addTodo = (todo)=>{

  //   todo.id = Number(Date.now())
  //   this.setState({
  //     todos : [...this.state.todos , todo]
  //   })
  // }

  // deleteTodo = (id) =>{
  //     const todoList = this.state.todos.filter((todo)=>{

  //       return todo.id !== id

  //     })

  //     this.setState({
  //       todos : todoList
  //     })
  // }

  // render(){
  //   return (
  //     <div className="App container">
  //          <h1 className="center blue-text">Todos</h1>
  //          <Todos todos={this.state.todos}  deleteTodo = {this.deleteTodo} /> 
  //          <AddTodo addTodo={this.addTodo}/>
  //     </div>
  //   );
  // }

}

export default App;
