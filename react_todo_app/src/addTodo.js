import React, {Component} from 'react'


class AddTodo extends Component{

    state = {
        content : null
    }
    handleOnChange= (e)=>{
       this.setState({
           content : e.target.value
       })
    }

    handleOnSubmit= (e)=>{
      //Submit
      e.preventDefault();
      this.props.addTodo({content : this.state.content})

      this.setState({
        content : ''
      })
      
      e.target.reset()

     }

   render(){
      return (
          <form onSubmit = {this.handleOnSubmit}>
              <label> Add  new todo: </label>
               <input type="text" name="content" onChange={this.handleOnChange} id="content" value={this.state.content} />
          </form>
      )
   }
}

export default AddTodo