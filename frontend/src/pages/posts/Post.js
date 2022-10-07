import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Post = () => {
    const { id } = useParams()
    const location = useLocation();
    const { postList } = location.state

    const currentPost = postList.find(post => post.id === id)
    return (
        <div>
            <h2>Post id : {currentPost.id} </h2>
            <p>{currentPost.body}</p>
        </div>
    )
}

export default Post