import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux' 
import Logo from '../images.png'

class Home extends Component {
    // state = {
    //     posts : []
    // }

    //renamed for redux implementation
    componentDidMount1(){
        setTimeout( ()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then( (res)=>{
           console.log('res...', res)

        //    this.setState({
        //        posts : res.data.slice(0,10)
        //    })
        })
    }, 0)
    }

    render(){
        const {posts} = this.props
        const postList = posts.length ? (
            posts.map(post=>{
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to ={ "/posts/"+ post.id}>
                               <span className="card-title">
                                   {post.title}
                                </span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className='center'>
                      No posts yet!!
                </div>
            )

        return (
            <div className="container">
                <h4 className='center'> Homepage </h4>
                {postList}
            </div>
        )
    }

};

const mapStateToProps = (state)=>{
 
    console.log('posts===', state)
    return {
       posts: state.posts
   }
}

export default connect(mapStateToProps)(Home);