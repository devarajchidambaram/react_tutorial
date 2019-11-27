import React , {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {deletePost} from '../actions/postActions'

class Post extends Component {
    state = {
        id : null
    }
    componentDidMount1(){
        let id = this.props.match.params.post_id
        console.log('id...........', id)
        this.setState({
            post : null
        })

    //     setTimeout( ()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then( (res)=>{
           console.log('res..---------------.', res)

           this.setState({
               post : res.data
           })

        }).catch((err)=>{
            console.log('error===', err)
        })
    // }, 5000)
    }

    handleClick = () => {
       this.props.deletePost(this.props.post.id)
       this.props.history.push('/')
    }

    render(){

        console.log('props', this.props)

       let post =  this.props.post ? (
          
        <div className='post'>
            <h4 className='center'> {this.props.post.title} </h4>
            <p> {this.props.post.body} </p>
            <div className='center'>
                <button className="btn grey" onClick={this.handleClick}>
                    Delete
                </button>
            </div>
        </div>

       ) : (<div className='center'>Post is loading ... </div>)


        return (
            <div className="container">
                   {post}
            </div>
        )
    }

};

const mapStateToProps = (state , ownProps)=>{

    const id  = Number( ownProps.match.params.post_id)

   var post =  state.posts.find( post => {
      return post.id === id 
   })

     return {
          post
     }
}

const mapDispatchToProps = (dispatch)=>{

    return {
        ////Formal way
        // deletePost : (id) => {
        //     dispatch({
        //         type : 'DELETE_POST',
        //         id : id
        //     })
        // }

        deletePost :(id) => dispatch(deletePost(id))

    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Post);