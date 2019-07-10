import React, {Component} from 'react'
import axios from 'axios'
import CustomTablePagination from '../TablePagination/CustomTablePagination'

export class PostList extends Component {
    constructor(props){
        super(props)
        this.state= {
            posts:[]
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response)
            this.setState({posts:response.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }
    render(){
        return(
<div>
<CustomTablePagination post={this.state.posts}/>

</div>
        )
    }
}

export default PostList